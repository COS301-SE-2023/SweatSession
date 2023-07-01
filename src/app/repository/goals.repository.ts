//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {IAddGOAL, IGOAL, IGOALS, IAddedGoal, ITASK} from 'src/app/models/fitnessgoals.model';
import { Injectable } from '@angular/core';
import {getCurrentUserId} from "../actions";
import {from, map} from "rxjs";
import {considerSettingUpAutocompletion} from "@angular/cli/src/utilities/completion";
import {collection} from "@angular/fire/firestore";


@Injectable({
    providedIn: 'root'
})
export class goalsRepository {

    constructor(private firestore: AngularFirestore) { }

    async creategoalsDocument(currUserId: string) {

        let goalID = this.firestore.createId();
        const goal =
            {
                id: "1",
                name: "First Goal",
                description: "This is my first goal",
                duration: 30,
                startDate: new Date(),
                endDate: "2024-10-10",
                progress: 0,
            }

            await  this.firestore
            .collection('fitnessgoals')
            .doc(currUserId)
            .collection('goals')
            .doc(goalID)
            .set(goal);

        const taskid = this.firestore.createId();

        const task: ITASK =
            {
                id: taskid,
                content: "Tick and click save to mark this task as done",
                done: false,
            }

        this.firestore
            .collection('fitnessgoals')
            .doc(currUserId)
            .collection('goals')
            .doc(goalID)
            .collection('Tasks')
            .doc(taskid)
            .set(task)

            .then((docRef) => {
                // console.log('Document written with ID: ', request.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });

    }

     addGoal(request: IAddGOAL) {
        // request.goal.id = this.firestore.createId();


        const goal =
            {
                id: request.goal.id,
                name: request.goal.name,
                description: request.goal.description,
                duration: request.goal.days_left,
                startDate: request.goal.startDate,
                endDate: request.goal.endDate,
                progress: request.goal.progress,
            }

             this.firestore
                .collection('fitnessgoals')
                .doc(request.userId)
                .collection('goals')
                .doc(request.goal.id)
                .set(goal);


    }

    deleteTask(userId: string, goalId: string, name: string) {
        const taskRef = this.firestore
            .collection('fitnessgoals')
            .doc(userId)
            .collection('goals')
            .doc(goalId)
            .collection('Tasks');

        taskRef
            .ref.where('content', '==', name)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const taskDocRef = taskRef.doc(doc.id);
                    taskDocRef.update({ done: true })
                        .then(() => {
                            console.log('Task successfully updated:', doc.id);
                        })
                        .catch((error) => {
                            console.error('Error updating task:', doc.id, error);
                        });
                });
            })
            .then(() => {
                console.log('Tasks successfully updated.');
            })
            .catch((error) => {
                console.error('Error querying tasks:', error);
            });
    }

    addTask(request: ITASK,  userId :string) {

        // console.log("Request Add Task: " , userId);

        const taskid = this.firestore.createId();

        this.firestore
            .collection('fitnessgoals')
            .doc(userId)
            .collection('goals')
            .doc(request.id)
            .collection('Tasks')
            .doc(taskid)
            .set(request)

            .then((docRef) => {
                // console.log('Document written with ID: ', request.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });

    }

    saveTasks( userId: string, goalid: string,request: ITASK[]) {

            console.log("Request Save Task: " , userId);

            request.forEach((task) => {

                this.firestore
                    .collection('fitnessgoals')
                    .doc(userId)
                    .collection('goals')
                    .doc(goalid)
                    .collection('Tasks')
                    .doc(task.id)
                    .set(task)

                    .then((docRef) => {
                        // console.log('Document written with ID: ', request.id);
                    })
                    .catch((error) => {
                        console.error('Error adding document: ', error);
                    });
            });

    }

    getGoals(userId: string | undefined | null) {
        const goals = this.firestore
            .collection('fitnessgoals')
            .doc(userId!)
            .collection('goals');

        return goals.snapshotChanges().pipe(
            map((snapshot) => {
                const goalsList: IGOAL[] = [];

                snapshot.forEach((doc) => {
                    const goal = {

                        ...doc.payload.doc.data(),
                    };
                    console.table( goal);
                    goalsList.push(goal);
                });

            return{
                goals: goalsList,
            };
        })
        );
    }

    getTasks(userId: string | undefined | null, goalId: string | undefined | null) {
        const tasks = this.firestore
            .collection('fitnessgoals')
            .doc(userId!)
            .collection('goals')
            .doc(goalId!)
            .collection('Tasks');

        return tasks.snapshotChanges().pipe(
            map((snapshot) => {
                const tasksList: ITASK[] = [];

                snapshot.forEach((doc) => {
                    const task = {
                        ...doc.payload.doc.data(),
                    };
                    tasksList.push(<ITASK>task);
                });

                return{
                    tasks: tasksList,
                };
            })
        );
    }

    removeGoal(userId: string, goalId: string) {
        //remove goal by field from firestore
        const goalRef = this.firestore
            .collection('fitnessgoals')
            .doc(userId)
            .collection('goals')
            .doc(goalId)
            .delete();
    }



        //     const goal: IGOAL = {
        //         id: request.userId,
        //         ...request.goal,
        //     }
        //     const response: IAddedGoal = {
        //         userId: request.userId,
        //         goal: goal,
        //         validate: true,
        //     };
        //
        //     return response;
        // } catch (error) {
        //     console.log('Error adding goal:', error);
        //     alert(error);
        //
        //     const response: IAddedGoal = {
        //         userId: request.userId,
        //         validate: false,
        //     };
        //
        //     return response;
        // }
    // }

}
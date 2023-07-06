//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {IAddGOAL, IGOAL, IGOALS, IAddedGoal, ITASK} from 'src/app/models/fitnessgoals.model';
import { Injectable } from '@angular/core';
import {getCurrentUserId} from "../actions";
import {from, map} from "rxjs";
import {considerSettingUpAutocompletion} from "@angular/cli/src/utilities/completion";
import {collection} from "@angular/fire/firestore";
import { AuthApi } from 'src/app/states/auth/auth.api';
import {getAuth} from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class goalsRepository {


    currUserId: string | undefined = undefined;

    constructor(private firestore: AngularFirestore,
                private auth: AuthApi
                ) { }

    creategoalsDocument(currUserId: string) {

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

            this.firestore
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
            .set(task);
            

    }

     addGoal(request: IAddGOAL) {
        // request.goal.id = this.firestore.createId();


        const goal =
            {
                id: request.goal.id,
                name: request.goal.name,
                description: request.goal.description,
                duration: 0,
                startDate: request.goal.startDate,
                endDate: request.goal.endDate,
                progress: 0,
                Tasks: request.goal.Tasks,
            }

             this.firestore
                .collection('fitnessgoals')
                .doc(request.userId)
                .collection('goals')
                .doc(request.goal.id)
                .set(goal);


    }

    getGoal(goalid: string)
    {
        const auth = getAuth();
        this.currUserId = auth.currentUser?.uid;

        if (this.currUserId!=undefined)
        {
        sessionStorage.setItem('currUserId', this.currUserId);
        }
        else
        {
        this.currUserId = sessionStorage.getItem('currUserId') ?? "";
        }

        const goal = this.firestore
            .collection('fitnessgoals')
            .doc(this.currUserId)
            .collection('goals')
            .doc(goalid);

            console.log("Goal ID :" + goalid);
            return goal.snapshotChanges().pipe(
                map((snapshot) => {
                  const data = snapshot.payload.data() as IGOAL;
                  const goal: IGOAL = {
                    id: data.id,
                    name: data.name,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description: data.description,
                    Tasks: data.Tasks,
                  };
                  return {
                    goal: goal,
                  }
                })
        );

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
            .set(request);

    }
    async updateTask(request: ITASK, goalid: string): Promise<any> {
        try {
          const auth = getAuth();
          this.currUserId = auth.currentUser?.uid;
      
          if (this.currUserId != undefined) {
            sessionStorage.setItem('currUserId', this.currUserId);
          } else {
            this.currUserId = sessionStorage.getItem('currUserId') ?? '';
          }
      
          const goalsDoc = this.firestore
            .collection('fitnessgoals')
            .doc(this.currUserId)
            .collection('goals')
            .doc(goalid);
      
          const taskId = request.id;
      
          const snapshot = await goalsDoc.get().toPromise();
          const goalsData = snapshot!.data();
      
          if (goalsData) {
            const tasks = goalsData['Tasks'] as ITASK[];
      
            const taskIndex = tasks.findIndex((task) => task.id === taskId);
      
            if (taskIndex > -1) {
              tasks[taskIndex].done = true;
      
              // Update the task first
              await goalsDoc.update({ Tasks: tasks });
      
              const updatedSnapshot = await goalsDoc.get().toPromise();
              const updatedGoalsData = updatedSnapshot!.data();
      
              if (updatedGoalsData) {
                const updatedTasks = updatedGoalsData['Tasks'] as ITASK[];
      
                const numTasksDone = updatedTasks.filter((task) => task.done).length;
                const progress = Math.round((numTasksDone / updatedTasks.length) * 100);
      
                // Update the progress of the goal
                await goalsDoc.update({ progress });
              }
            }
          }
      
          return; // Return a resolved promise
        } catch (error) {
          throw error; // Throw any encountered errors
        }
      }
      
      
      
      
      
      
      

    doneTask(userId: string, goalId: string, taskid : string, request: ITASK) {

        // console.log("Request Done Task: " , userId);
        request.done = true;// just to double check
        this.firestore
            .collection('fitnessgoals')
            .doc(userId)
            .collection('goals')
            .doc(goalId)
            .collection('Tasks')
            .doc(taskid)
            .set(request);

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

    removeGoal(goalId: string) {

        const auth = getAuth();
        this.currUserId = auth.currentUser?.uid;
      
        if (this.currUserId != undefined) {
          sessionStorage.setItem('currUserId', this.currUserId);
        } else {
          this.currUserId = sessionStorage.getItem('currUserId') ?? '';
        }


            this.firestore
            .collection('fitnessgoals')
            .doc(this.currUserId)
            .collection('goals')
            .doc(goalId)
            .delete()
            .then(() => {
                console.log('Goal successfully deleted!');
            }
            )
            .catch((error) => {

                console.error('Error removing goal: ', error);
            }
            );
    }

}
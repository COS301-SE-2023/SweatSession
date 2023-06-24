//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {IAddGOAL, IGOAL, IGOALS,IAddedGoal} from 'src/app/models/fitnessgoals.model';
import { Injectable } from '@angular/core';
import {getCurrentUserId} from "../actions";
import {from} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class goalsRepository {

    constructor(private firestore: AngularFirestore) { }

    async creategoalsDocument(currUserId: string) {

        const goalsRef = this.firestore.collection('fitnessgoals').doc(currUserId);
        const goalsList: IGOALS = {
            goals: []
        }
        goalsRef.set(goalsList)
        .then((docRef) => {
            console.log('Document created successfully with ID:', docRef);
            // alert('Document created successfully with ID:' + docRef);

        })
        .catch((error) => {
            console.error('Error creating goal document:', error);
        });


        //preturn await admin.firestore().collection('profiles').doc(newProfile.userId).create(newProfile);
    }

    // async addGoal(request: IAddGOAL) {
    //     return (
    //         await this.firestore
    //             .collection('fitnessgoals')
    //             .doc(request.userId)
    //             .collection('goals')
    //             .add(request.goal)
    //     )
    // }
     addGoal(request: IAddGOAL) {
        alert("addGoal" + request.userId + "in repository ================");
        return from (
             this.firestore
                .collection('fitnessgoals')
                .doc(request.userId)
                .collection('goals')
                .add(request.goal)
        )
    }

    getGoals(userId: string) {
        return this.firestore
            .collection('fitnessgoals')
            .doc(userId)
            .collection('goals')
            .valueChanges({ idField: 'id' });
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
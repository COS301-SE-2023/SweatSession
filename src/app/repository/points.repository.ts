//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IPoints } from 'src/app/models/points.model';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { BadgesRepository } from './badges.repository';



@Injectable({
    providedIn: 'root'
})
export class PointsRepository {

    constructor(private firestore: AngularFirestore, private badgesRepository: BadgesRepository) { }

    async createPointsDocument(currUserId: string) {
        const pointsRef = this.firestore.collection('points').doc(currUserId);
        const newPointsDocument: IPoints = {
            userPoints: 0
        };
        pointsRef.set(newPointsDocument)
            .then((docRef) => {
                console.log('Document created successfully with ID:', docRef);
            })
            .catch((error) => {
                console.error('Error creating document:', error);
            });
    }

    async workoutSessionPoints(currUserId: string) {
        const pointsDocRef = this.firestore.collection('points').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;
    
        const docSnapshot = await pointsDocRef.get().toPromise(); // Convert Observable to Promise
    
        if (docSnapshot && docSnapshot.exists) {
            const data = docSnapshot.data() as { [key: string]: any }; // Typecast data as an object with any keys
            const currentWorkoutSessionsAttended = data?.['workoutSessionsAttended'] || 0;
            const newWorkoutSessionsAttended = currentWorkoutSessionsAttended + 1;
    
            let updatedFields = {};
    
            if (newWorkoutSessionsAttended % 3 === 0) {
                updatedFields = {
                    userPoints: fieldValue.increment(75),
                    workoutSessionsAttended: fieldValue.increment(1)
                };
            } else {
                updatedFields = {
                    workoutSessionsAttended: fieldValue.increment(1)
                };
            }
            if (newWorkoutSessionsAttended == 20){
                this.badgesRepository.addBadge(currUserId, 4);//Workout Warrior
            }
    
            return pointsDocRef.update(updatedFields);
        } else {
            // Handle the case when the document does not exist
            console.log("Document does not exist");
            return null;
        }
    }
    
    async fitnessGoalsPoints(currUserId: string) {
        const pointsDocRef = this.firestore.collection('points').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return pointsDocRef.update({
            userPoints: fieldValue.increment(100)
        });
    }

    async completeWorkoutPlanPoints(currUserId: string) {
        const pointsDocRef = this.firestore.collection('points').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return pointsDocRef.update({
            userPoints: fieldValue.increment(50);
        });
    }
}
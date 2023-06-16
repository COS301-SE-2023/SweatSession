//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IPoints } from 'src/app/models/points.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class PointsRepository {

    constructor(private firestore: AngularFirestore) { }

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
}
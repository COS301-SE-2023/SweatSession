//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IBadges } from 'src/app/models/badges.model';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';


@Injectable({
    providedIn: 'root'
})
export class BadgesRepository {

    constructor(private firestore: AngularFirestore) { }



    async createBadgesDocument(currUserId: string) {
        // alert("In register repositry createProfileFunc");
        // const collectionRef: AngularFirestoreCollection<IProfileModel> = this.firestore.collection('profiles');
        // collectionRef.add(newProfile)
        //     .then((docRef) => {
        //         console.log('Document created successfully with ID:', docRef.id);
        //     })
        //     .catch((error) => {
        //         console.error('Error creating document:', error);
        //     });
        const badgesRef = this.firestore.collection('badges').doc(currUserId);
        const newBadgesDocument: IBadges = {
            receivedBadges: [],
            gymsVisited: []
        };
        badgesRef.set(newBadgesDocument)
            .then((docRef) => {
                console.log('Document created successfully with ID:', docRef);
                // alert('Document created successfully with ID:' + docRef);
            })
            .catch((error) => {
                console.error('Error creating document:', error);
            });
        //preturn await admin.firestore().collection('profiles').doc(newProfile.userId).create(newProfile);
    }
    async socialiteBadge(currUserId: string) {
        const badgeDocRef = this.firestore.collection('badges').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return badgeDocRef.update({
            receivedBadges: fieldValue.arrayUnion(1)
        });
    }

    async stretchingStarBadge(currUserId: string) {
        const badgeDocRef = this.firestore.collection('badges').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return badgeDocRef.update({
            receivedBadges: fieldValue.arrayUnion(2)
        });
    }

    async addBadge(currUserId: string, badgeNo: number) {
        //0 Starter's Success
        //1 socialite
        //2 Stretching Star
        //3 Record Breaker
        //4 Workout Warrior
        //5 Dynamic Duo
        //6 Push-ups Pro
        //7 Active Adventurer
        const badgeDocRef = this.firestore.collection('badges').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return badgeDocRef.update({
            receivedBadges: fieldValue.arrayUnion(badgeNo)
        });
    }
}
//import * as admin from 'firebase-admin';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { IBadges } from 'src/app/models/badges.model';


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
        const badgeDocRef = this.firestore.collection('profiles').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return badgeDocRef.update({
            receivedBadges: fieldValue.arrayUnion(1)
        });
    }

    async stretchingStarBadge(currUserId: string) {
        const badgeDocRef = this.firestore.collection('profiles').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return badgeDocRef.update({
            receivedBadges: fieldValue.arrayUnion(2)
        });
    }

    async activeAdventurerBadge(currUserId: string, gymName: string){
        const badgeDocRef = this.firestore.collection('profiles').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        await badgeDocRef.update({
            gymsVisited: fieldValue.arrayUnion(gymName)
        });

        const updatedBadgeDocRef = this.firestore.collection('profiles').doc(currUserId);
        const docSnapshot = await updatedBadgeDocRef.get().toPromise(); // Convert Observable to Promise
    
        if (docSnapshot && docSnapshot.exists) {
            const data = docSnapshot.data() as { [key: string]: any }; // Typecast data as an object with any keys
            const gymsVisited = data?.['gymsVisited'] || [];
    
            if (gymsVisited.length==5) {
                this.addBadge(currUserId, 6);//6 Active Adventurer badge
            }
        }
    }

    async addBadge(currUserId: string, badgeNo: number) {
        //0 Starter's Success
        //1 socialite
        //2 Stretching Star
        //3 Record Breaker
        //4 Workout Warrior
        //5 Dynamic Duo
        //6 Active Adventurer
        const badgeDocRef = this.firestore.collection('profiles').doc(currUserId);
        const fieldValue = firebase.firestore.FieldValue;

        return badgeDocRef.update({
            receivedBadges: fieldValue.arrayUnion(badgeNo)
        });
    }
}
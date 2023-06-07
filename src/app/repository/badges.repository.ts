//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IBadges } from 'src/app/models/badges.model';
import { Injectable } from '@angular/core';


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
            receivedBadges: []
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
    // async createProfile(newProfile: IProfileModel) {
    //     // alert("In register repositry createProfileFunc");
    //     // const collectionRef: AngularFirestoreCollection<IProfileModel> = this.firestore.collection('profiles');
    //     // collectionRef.add(newProfile)
    //     //     .then((docRef) => {
    //     //         console.log('Document created successfully with ID:', docRef.id);
    //     //     })
    //     //     .catch((error) => {
    //     //         console.error('Error creating document:', error);
    //     //     });
    //     const profileRef = this.firestore.collection('profiles').doc(newProfile.userId);
    //     profileRef.set(newProfile)
    //         .then((docRef) => {
    //             console.log('Document created successfully with ID:', docRef);
    //             // alert('Document created successfully with ID:' + docRef);
    //         })
    //         .catch((error) => {
    //             console.error('Error creating document:', error);
    //         });
    //     //preturn await admin.firestore().collection('profiles').doc(newProfile.userId).create(newProfile);
    // }
}
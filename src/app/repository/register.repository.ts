//import * as admin from 'firebase-admin';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IProfileModel, IUserModel } from 'src/app/models/profile.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class RegisterRepository {

    constructor(private firestore: AngularFirestore) { }

    async createUser(newUser: IUserModel) {
        // const createCollectionRef = this.firestore.collection("users");
        // const doc = await createCollectionRef.doc('dummy').get().toPromise();

        // if (!doc || !doc.exists) {
        //     // Create the collection by adding a dummy document
        //     await createCollectionRef.doc('dummy').set({})
        //         .then(() => {
        //             alert('User Collection created successfully');
        //         })
        //         .catch(() => {
        //             alert('User Collection not created');
        //         });
        //     console.log('Collection created:', "users");
        // } else {
        //     console.log('Collection already exists:', "users");
        // }


        alert("In register repositry createUser");
        const collectionRef: AngularFirestoreCollection<IUserModel> = this.firestore.collection('users');
        collectionRef.add(newUser)
            .then((docRef) => {
                console.log('Document created successfully with ID:', docRef.id);
                alert('Document created successfully with ID:' + docRef.id);
            })
            .catch((error) => {
                console.error('Error creating document:', error);
            });
        //return await getFirestore().collection('user').doc(newUser.id).create(newUser);
    }

    async createProfile(newProfile: IProfileModel) {
        alert("In register repositry createProfileFunc");
        const collectionRef: AngularFirestoreCollection<IProfileModel> = this.firestore.collection('profiles');
        collectionRef.add(newProfile)
            .then((docRef) => {
                console.log('Document created successfully with ID:', docRef.id);
            })
            .catch((error) => {
                console.error('Error creating document:', error);
            });
        //preturn await admin.firestore().collection('profiles').doc(newProfile.userId).create(newProfile);
    }
}
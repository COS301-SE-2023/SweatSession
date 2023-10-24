import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IProfileModel, IUserModel } from 'src/app/models/profile.model';


@Injectable({
    providedIn: 'root'
})
export class RegisterRepository {

    constructor(private firestore: AngularFirestore) { }

    async createUser(newUser: IUserModel) {
        const userRef = this.firestore.collection('users').doc(newUser.id);
        userRef.set(newUser)
            .then((docRef) => {
                console.log('Document created successfully with ID:', docRef);
            })
            .catch((error) => {
                console.error('Error creating document:', error);
            });
    }

    async createProfile(newProfile: IProfileModel) {
        const profileRef = this.firestore.collection('profiles').doc(newProfile.userId);
        profileRef.set(newProfile)
            .then((docRef) => {
                console.log('Document created successfully with ID:', docRef);
            })
            .catch((error) => {
                console.error('Error creating document:', error);
            });
    }
}
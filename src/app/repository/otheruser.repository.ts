import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IProfileModel } from '../models';

@Injectable({
    providedIn: 'root'
  })
  export class OtheruserRepository {
     
    constructor(private firestore: AngularFirestore) { }

    async getProfiles() {
        const collectionRef = await this.firestore
        .collection("profiles")
        .get()
        .toPromise();
    
    
        let profiles: IProfileModel[] = [];
    
        collectionRef!.forEach((doc)=>{
          const profile = {
            ...doc.data() as IProfileModel
          }
          profiles.push(profile);
        })
        return profiles;
    }

    async getProfile(request: IProfileModel) {
        const docRef = await this.firestore
            .collection("profiles")
            .doc(request.userId)
            .get()
            .toPromise();

        const otheruser: IProfileModel = {
            ...docRef!.data() as IProfileModel
        }

        return otheruser;
    }

}
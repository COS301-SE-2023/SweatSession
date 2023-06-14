import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IProfileModel } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class OtheruserRepository {
     
    constructor(private firestore: AngularFirestore) { }

    async getProfiles() {
      const collectionRef = await this.firestore.collection("profiles")
      
      return collectionRef.snapshotChanges().pipe(
        map((snapshot)=>{
          let profiles: IProfileModel[] = [];
  
          snapshot.forEach((doc)=>{
            const profile = {
              ...doc.payload.doc.data() as IProfileModel
            }
            profiles.push(profile);
          })
          return profiles;
        })
      )
    }

    async getProfile(request: IProfileModel) {
        const docRef = await this.firestore
            .collection<IProfileModel>("profiles")
            .doc(request.userId);

        return docRef.snapshotChanges().pipe(
          map((snapshot) =>{
            const otheruser: IProfileModel = {
              ...snapshot.payload.data() as IProfileModel
            }
  
            return otheruser;
          })
        )
    }

}
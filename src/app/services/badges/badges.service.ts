import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { IBadges } from 'src/app/models/badges.model';
import { BadgesRepository } from 'src/app/repository/badges.repository'
import { AuthApi } from 'src/app/states/auth/auth.api';
import { switchMap } from 'rxjs/operators';
import { getAuth } from '@angular/fire/auth';
// import {IProfileModel, IUserModel} from 'src/app/models/profile.model';
// // import { Timestamp } from 'firebase-admin/firestore';
// import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private repository: BadgesRepository, private firestore: Firestore, private authApi: AuthApi) { 
  }

  badges$() {
    const auth = getAuth();
    const currUserId = auth.currentUser?.uid;
    // this.authApi.getCurrentUserId().then((id: string | undefined) => {
    //   if (id) {
    //     // Use the id here
    //     currUserId = id;
    //   }
    // });
    alert(currUserId);
    const docRef = doc(
      this.firestore,
      `badges/${currUserId}`   //check how it is modelled in firebase
    ).withConverter<IBadges>({       //convert our firestore data into INotificationBox type
      fromFirestore: (snapshot) => {
        return (snapshot.data() as IBadges);
      },
      toFirestore: (it: IBadges) => it,
    });
    return docData(docRef, { idField: 'id' });
  }

  // badges$(): Observable<IBadges> {
  //   return from(this.authApi.getCurrentUserId()).pipe(
  //     switchMap((id: string | undefined) => {
  //       if (id) {
  //         const docRef = doc(this.firestore, `badges/${id}`).withConverter<IBadges>({
  //           fromFirestore: (snapshot) => {
  //             return snapshot.data() as IBadges;
  //           },
  //           toFirestore: (it: IBadges) => it,
  //         });
  //         return docData(docRef, { idField: 'id' });
  //       } else {
  //         throw new Error('Unable to retrieve current user ID.');
  //       }
  //     })
  //   );
  // }
  

  // async getId() {
  //   const id = await this.authApi.getCurrentUserId();
  //   if (id) {
  //     // Use the id here
  //     console.log(id);
  //   }
  // }
  // badges$(id: string) {
  //   const docRef = doc(
  //     this.firestore,
  //     `badges/${id}`   //check how it is modelled in firebase
  //   ).withConverter<IBadges>({       //convert our firestore data into INotificationBox type
  //     fromFirestore: (snapshot) => {
  //       return snapshot.data() as IBadges;
  //     },
  //     toFirestore: (it: IBadges) => it,
  //   });
  //   return docData(docRef, { idField: 'id' });
  // }

  //   async register(currUserId:string, regEmail:string){
  //       // if (currUserId){
  //       //   const newUser:IUserModel = {
  //       //     id:currUserId,
  //       //     email: regEmail,
  //       //     //created: Timestamp.now()
  //       //   }
  //       // }
  //       // alert("In register Service");
  //       const newUser:IUserModel = {
  //         id:currUserId,
  //         email: regEmail,
  //         created: Timestamp.now()
  //       }
  //       console.log(newUser);

  //       const [dName] = regEmail.split("@"); //this is to get the part until the @
  //       const newProfile:IProfileModel = {
  //         userId:currUserId,
  //         displayName:dName,
  //         email: regEmail
  //       }
  //       console.log(newProfile);
  //       //this.repository.createUser(newUser);
  //       //this.repository.createProfile({});
  //       // alert("In register Service");
  //       this.repository.createUser(newUser);
  //       this.repository.createProfile(newProfile);
  //   }
}
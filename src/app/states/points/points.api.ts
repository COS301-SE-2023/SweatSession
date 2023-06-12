import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore } from '@angular/fire/firestore';
// import { IBadges } from 'src/app/models/badges.model';

import { NavController } from '@ionic/angular';
import { AuthApi } from '../auth/auth.api';
import { getAuth } from '@angular/fire/auth';

@Injectable()
export class PointsApi {
  currUserId: string | undefined | null;
  constructor(private Nav: NavController, private firestore: Firestore, private authApi: AuthApi) {}//, private readonly authObject: Auth, 

//   points$() {
//     // const id = this.authApi.getCurrentUserId();
//     const auth = getAuth();
//     this.currUserId = auth.currentUser?.uid;
//     if (this.currUserId!=undefined){
//       sessionStorage.setItem('currUserId', this.currUserId);
//     }else{
//       this.currUserId = sessionStorage.getItem('currUserId');
//     }
//     // alert(AuthState.currUserId);
//     // alert("IN badges.api.ts");
//     // alert(currUserId);
//     const docRef = doc(
//       this.firestore,
//       `points/${this.currUserId}`
//     ).withConverter<IPoints>({       //convert our firestore data into the IBadges type
//       fromFirestore: (snapshot) => {
//         return (snapshot.data() as IPoints);
//       },
//       toFirestore: (it: IPoints) => it,
//     });
//     return docData(docRef, { idField: 'id' });
//   }
}
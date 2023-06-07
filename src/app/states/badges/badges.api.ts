import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { IBadges } from 'src/app/models/badges.model';
import { BadgesRepository } from 'src/app/repository/badges.repository'
// import {
//   Auth,
//   authState,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   getAuth
// } from '@angular/fire/auth';

// import { signOut } from '@firebase/auth';
import { NavController } from '@ionic/angular';
import { AuthApi } from '../auth/auth.api';
//import { RegisterRepository } from 'src/app/repository/register.repository';

//import { getAuth } from 'firebase/auth';

@Injectable()
export class BadgesApi {
  constructor(private Nav: NavController, private firestore: Firestore, private authApi: AuthApi) {}//, private readonly authObject: Auth, 

//   badges$() {
//     return authState(this.authObject);
//   }
badges$() {
    const id = this.authApi.getCurrentUserId();
    alert(id);
    const docRef = doc(
      this.firestore,
      `badges/${id}`   //check how it is modelled in firebase
    ).withConverter<IBadges>({       //convert our firestore data into INotificationBox type
      fromFirestore: (snapshot) => {
        return (snapshot.data() as IBadges);
      },
      toFirestore: (it: IBadges) => it,
    });
    return docData(docRef, { idField: 'id' });
  }




//   async login(regEmail: string, regPassword: string) {
//     try {
//       //alert("in auth api login function");
//       await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
//       //return await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
      
//       this.Nav.navigateRoot('/home'); // this is so they are only directed to login when they enter a valid email and password combination
//     }catch (error) {
//       // Handle the Firebase error
//       console.error('Firebase error:', error);
//       alert("Incorrect email password combination");
//       //return "";
//     }
//   }
}
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private firestore: firebase.firestore.Firestore;

  constructor() {
    firebase.initializeApp(environment.firebase);
    this.firestore  = firebase.firestore();
  }

  getUserProfile(userId: string): Promise<any> {
    return this.firestore.collection('profile').doc(userId).get()
      .then((doc: { exists: any; data: () => any; }) => {
        if (doc.exists) {
          return doc.data();
        } else {
          throw new Error('User profile not found');
        }
      })
      .catch((error: any) => {
        throw error;
      });
  }
}

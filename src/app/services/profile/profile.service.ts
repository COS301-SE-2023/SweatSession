import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { environment } from 'src/environments/environment';
import * as admin from 'firebase-admin';
import { firestore } from 'firebase-functions/v1';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private firestore: firebase.firestore.Firestore;

  // firestore = admin.firestore();
  constructor() {
    firebase.initializeApp(environment.firebase);
    this.firestore  = firebase.firestore();
  }

  getUserProfile(userId: string): Promise<any> {
    return this.firestore.collection('profiles').doc(userId).get()
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

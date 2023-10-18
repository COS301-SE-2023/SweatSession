import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {finalize, takeUntil} from 'rxjs/operators';
import {getAuth} from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class HealthDataService {

    currUserId: string | undefined | null;
  constructor(private firestore: AngularFirestore) { }

  async getHealthData(userId: string) {
    return new Promise<any[]>((resolve, reject) => {
      let subscription: any;
      const ref = this.firestore.collection('healthdata',
          (query) =>
        query.where('userId', '==', userId)
      )
      .valueChanges()
      .pipe(
        finalize(() => {
          if (subscription) {
            subscription.unsubscribe(); 
          }
        })
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
      subscription = ref;
    });
  }

    async setupProfile() {
        const auth = getAuth();

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                this.currUserId = user.uid;
                sessionStorage.setItem('currUserId', this.currUserId);
            } else {
                this.currUserId = sessionStorage.getItem('currUserId');
            }
        });
    }

    async addWeightData(weight: number, userId: string) {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

        // Check if the document with the same date exists
        const existingDocRef = this.firestore.collection('chartdata').ref
            .where('date', '==', formattedDate).where('userId', '==', userId);

        const existingDocs = await existingDocRef.get();

        if (existingDocs.empty) {
            // If the document doesn't exist, create a new one
            await this.firestore.collection('chartdata').add({
                weight: weight,
                userId: userId,
                date: formattedDate,
            });
        } else {
            // If a document with the same date exists, update it
            const docId = existingDocs.docs[0].id;
            await this.firestore.collection('chartdata').doc(docId).update({
                weight: weight,
                userId: userId,
                date: formattedDate,
            });
        }

    }


}
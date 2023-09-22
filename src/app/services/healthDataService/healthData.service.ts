import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HealthDataService {

  constructor(private firestore: AngularFirestore) { }

  async getHealthData(userId: string) {
    return new Promise<any[]>((resolve, reject) => {
        const ref = this.firestore.collection('healthdata', (query) =>
          query.where('userId', '==', userId)
        ).valueChanges().subscribe(
          (data) => {
            resolve(data);
            ref.unsubscribe(); // Unsubscribe to prevent memory leaks
          },
          (error) => {
            reject(error);
            ref.unsubscribe(); // Unsubscribe on error as well
          }
        );
      });
  }
}
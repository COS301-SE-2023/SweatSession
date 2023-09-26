import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HealthDataService {

  constructor(private firestore: AngularFirestore) { }

  async getHealthData(userId: string) {
    return new Promise<any[]>((resolve, reject) => {
      let subscription: any;
      const ref = this.firestore.collection('healthdata', (query) =>
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
}
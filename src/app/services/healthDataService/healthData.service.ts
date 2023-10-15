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

  checkWeightDataExistence(userId: string, date: Date): boolean
  {
    const snapshot =  this.firestore
      .collection('chartdata', (ref) =>
          ref.where('userId', '==', userId)
              .where('date', '==', date))
      .get()

       snapshot.pipe().subscribe((data) => {
        if (data.size > 0) {
          return true;
        }
        else {
          return false;
        }
        });
    return false;
    }


  async addWeightData(userId: string, weight: number) {
      console.log('addWeightData() called with data: ' + userId + ' ' + weight + ' ' + new Date());

        if (await this.checkWeightDataExistence(userId, new Date())) {
            console.log('weight data exists for today');
            return;
        }
      return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('chartdata')
        .add({
          userId,
          weight,
          date: new Date(),
        })
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }
}
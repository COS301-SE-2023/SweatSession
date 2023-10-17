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

  async addweightdata(weight: number)
  {
      this.setupProfile();
      const userId = this.currUserId;
        const healthDataId = await this.checkChartDataExistence(userId!,weight);
  }

  checkChartDataExistence(userId: string, weight: number) {
      // check if the userid has the same date as today in chartdata
      //if it does, then update the add the weight to the chartdata
      // if it does, then update the weight
      // if it doesn't, then create a new entry
      //
      //   const snapshot = this.firestore
      //       .collection('chartdata', (ref) => ref.where('userId', '==', userId))
      //       .get()
      //       .toPromise();
      //       //if chartdata collection doesnt exist create one
      //       snapshot?.then(
      //           (data) => {
      //               if (!data?.empty) {
      //                   this.firestore
      //                       .collection('chartdata')
      //                       .doc(data?['weight'])
      //                       .update({
      //                           weight: weight,
      //                       });
      //               } else {
      //                   this.firestore
      //                       .collection('chartdata')
      //                       .add({
      //                           userId: userId,
      //                           weight: weight,
      //                       });
      //               }
      //           },
      //           (error) => {
      //               console.log(error);
      //           }
      //       )

      return "Eix";
            }

}
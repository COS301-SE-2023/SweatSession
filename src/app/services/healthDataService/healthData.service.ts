import { Injectable } from '@angular/core';
import { getAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize, map } from 'rxjs/operators';
import { weightdata } from "../../models/exercise.model";
import { NavigationService } from '../navigation/navigation.service';


@Injectable({
  providedIn: 'root'
})
export class HealthDataService {

    currUserId: string | undefined | null;
  constructor(private firestore: AngularFirestore, private navigation: NavigationService) { }

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

  setupProfile() {
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

  fetchWeightData(userId: string) {
    const docRef = this.firestore.collection<weightdata>('chartdata', (ref) =>
        ref.where('userId', '==', userId)
    );
    
    return docRef.snapshotChanges().pipe(
      map((snapshot)=>{
        const weightData: weightdata[] = [];

        snapshot.forEach(async (doc) => {
          const weightdata = {
            ...doc.payload.doc.data()

          };
      
          weightData.push(weightdata);
        });
        return weightData;
      })
    )

      // await lastValueFrom(docRef).then((querySnapshot) => {
      //     if (querySnapshot) {
      //         querySnapshot.docs.forEach((doc) => {
      //             const data = doc.data() as weightdata; // Accessing data from each DocumentSnapshot
      //             weightData.push({
      //                 weight: data.weight,
      //                 userId: data.userId,
      //                 date: data.date,
      //             });
      //         });
      //         // console.table(weightData);
      //     }
      // });

      // return weightData;
  }


  async addWeightData(weight: number,Tcalories:number, userId: string) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

    // Check if the document with the same date exists
    const existingDocRef = this.firestore.collection('chartdata').ref
        .where('date', '==', formattedDate).where('userId', '==', userId);

    const existingDocs = await existingDocRef.get();

    if (existingDocs.empty) {
        // If the document doesn't exist, create a new one
        await this.firestore.collection('chartdata')
            .add({
            calories: Tcalories,
            weight: weight,
            userId: userId,
            date: formattedDate,
        });
    } else {
        // If a document with the same date exists, update it
        const docId = existingDocs.docs[0].id;
        await this.firestore.collection('chartdata').doc(docId).update({
            calories: Tcalories,
            weight: weight,
            userId: userId,
            date: formattedDate,
        });
    }
    this.navigation.back();
  }
}
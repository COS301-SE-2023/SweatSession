import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { Observable, from, lastValueFrom } from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';
import { IProfileModel, IGetProfile } from '../models';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileRepository {

  constructor(private firestore: AngularFirestore) {}

  getProfile(request: IGetProfile): Observable<IProfileModel | undefined> {
  return this.firestore
  .collection('profiles')
  .doc(request.userId)
  .get()
  .pipe(
    map((snapshot) => {


      const data = snapshot.data() as IProfileModel | undefined;
      const id = snapshot.id;
      
      // console.log(id);
      
      if (data) {
        return { id, ...data };
      } else {
        console.log(data);
        throw new Error('Profile does not exist for UserID: ' + request.userId);
      }
    })
  );
    }
  

  addProfile(profile: IProfileModel): Observable<IProfileModel | undefined> {
    return from(
      this.firestore
        .collection('profiles')
        .doc<IProfileModel>(profile.userId)
        .set(profile)
    ).pipe(
      map(() => profile),
      catchError(async () => undefined)
    );
  }

  

  updateProfile(request: IProfileModel): Promise<void> {
    return this.firestore
      .collection('profiles')
      .doc<IProfileModel>(request.userId)
      .set(request);
  }

  async getUser(userId: string) {
    const profileDoc = this.firestore.doc<IProfileModel>(`profiles/${userId}`).get();
    const profile: IProfileModel = (await lastValueFrom(profileDoc)).data()!;
    
    return profile;
  }

  gethealthdata(userId: string | undefined | null) {
    return this.firestore.collection('healthdata', ref => ref.where('displayName', '==', userId))
        .valueChanges()
        .pipe(
            take(1) // Optionally, take only one emission to complete the observable after receiving data
        )
        .toPromise() // Convert the observable to a promise
        .then(data => {
          if (data && data.length > 0) {
            console.log("I returned data");
            // console.table(data);
            return data; // Or some other appropriate value
          } else {
            // Handle the case where there is no data
            return null; // Or some other appropriate value
          }
        })
        .catch(error => {
          // Handle errors here
          console.error('Error fetching health data:', error);
          throw error; // Rethrow the error or handle it as needed
        });
  }


}
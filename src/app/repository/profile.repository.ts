import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IProfileModel, IGetProfile } from '../models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileRepository {

  constructor(private firestore: AngularFirestore) {}

  getProfile(request: IGetProfile): Observable<IProfileModel | undefined> {

  // temp : string = request.userId;
  // alert("getProfile" + request.userId + "================");
  return this.firestore
  .collection('profiles')
  .doc<string>(request.userId)
  // .doc('izwEZ4i1DvbBuOT8aszFAiotOrW2')
  .get()
  .pipe(
    map((snapshot) => {

      // if(snapshot.exists) {
      //   alert("==============snapshot exists================");
      // }

      const data = snapshot.data() as IProfileModel | undefined;
      const id = snapshot.id;
      
      console.log(id);
      
      if (data) {
        return { id, ...data };
      } else {
        console.log(data);
        throw new Error('Profile does not exist for UserID: ' + request.userId);
      }
    })
  );
  

  // getProfile(request: IGetProfile): Observable<IProfileModel | undefined> {
    
  //   return this.firestore
  //     .collection('profiles')
  //     .doc<IProfileModel>(request.userId)
  //     .valueChanges()
  //     .pipe(
  //       map((data: IProfileModel | undefined) => {

  //         console.log(data);
          
  //         if (data) {
  //           return data;
  //         } else {
  //           console.log(data);
  //           throw new Error('Profile does not exist for UserID: ' + request.userId);
  //         }
  //       })
  //     );
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

  async getProfiles() {
    const collectionRef = await this.firestore
    .collection("profiles")
    .get()
    .toPromise();


    let profiles: IProfileModel[] = [];

    collectionRef!.forEach((doc)=>{
      const profile = {
        ...doc.data() as IProfileModel
      }
      profiles.push(profile);
    })
    return profiles;
  }
}
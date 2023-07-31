import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

}
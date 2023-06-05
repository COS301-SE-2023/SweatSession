import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProfileModel, IGetProfile } from '../models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileRepository {

  constructor(private firestore: AngularFirestore) {}

  getProfile(request: IGetProfile): Observable<IProfileModel | undefined> {
    return this.firestore
      .collection('profiles')
      .doc<IProfileModel>(request.userId)
      .valueChanges()
      .pipe(
        map((data: IProfileModel | undefined) => {
          if (data) {
            return data;
          } else {
            throw new Error('Profile does not exist for UserID: ' + request.userId);
          }
        })
      );
  }
  updateProfile(request: IProfileModel): Promise<void> {
    return this.firestore
      .collection('profiles')
      .doc<IProfileModel>(request.userId)
      .set(request);
  }
}
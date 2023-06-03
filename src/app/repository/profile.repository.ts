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
      .get()
      .pipe(
        map((snapshot: any) => {
          const data = snapshot.data() as IProfileModel | undefined;
          if (snapshot.exists && data) {
            return data;
          } else {
            return undefined; // Profile does not exist
          }
        })
      );
  }
}
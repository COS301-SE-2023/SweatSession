import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { IBadges } from 'src/app/models/badges.model';
import { BadgesRepository } from 'src/app/repository/badges.repository'
import { AuthApi } from 'src/app/states/auth/auth.api';
import { switchMap } from 'rxjs/operators';
import { getAuth } from '@angular/fire/auth';
// import {IProfileModel, IUserModel} from 'src/app/models/profile.model';
// // import { Timestamp } from 'firebase-admin/firestore';
// import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private repository: BadgesRepository, private firestore: Firestore, private authApi: AuthApi) { 
  }

  badges$() {
    const auth = getAuth();
    const currUserId = auth.currentUser?.uid;
    alert("In badges$");
    alert(currUserId);
    const docRef = doc(
      this.firestore,
      `badges/${currUserId}`
    ).withConverter<IBadges>({ 
      fromFirestore: (snapshot) => {
        return (snapshot.data() as IBadges);
      },
      toFirestore: (it: IBadges) => it,
    });
    return docData(docRef, { idField: 'id' });
  }
}
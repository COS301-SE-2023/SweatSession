import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { IPoints } from 'src/app/models/points.model';

import { getAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AuthApi } from '../auth/auth.api';
import { IProfileModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PointsApi {
  currUserId: string | undefined | null;
  constructor(private Nav: NavController, private firestore: Firestore, private authApi: AuthApi) {}

  points$() {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId!=undefined){
      sessionStorage.setItem('currUserId', this.currUserId);
    }else{
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    // alert("IN points.api.ts");
    // alert(currUserId);
    const docRef = doc(
      this.firestore,
      `profiles/${this.currUserId}`
    ).withConverter<IPoints>({       //convert our firestore data into the IPoints type
      fromFirestore: (snapshot) => {
        const profile: IProfileModel = snapshot.data() as IProfileModel
        let points: IPoints ={
          userPoints: profile.points!,
          sessionsCompleted: profile.sessionsCompleted
        }
        return (points);
      },
      toFirestore: (it: IPoints) => it,
    });
    return docData(docRef, { idField: 'id' });
  }

  otherUserPoints$(id: string) {
    const docRef = doc(
      this.firestore,
      `profiles/${id}`
    ).withConverter<IPoints>({       //convert our firestore data into the IPoints type
      fromFirestore: (snapshot) => {
        const profile: IProfileModel = snapshot.data() as IProfileModel
        let points: IPoints ={
          userPoints: profile.points!,
          sessionsCompleted: profile.sessionsCompleted
        }
        return (points);
      },
      toFirestore: (it: IPoints) => it,
    });
    return docData(docRef, { idField: 'id' });
  }
}
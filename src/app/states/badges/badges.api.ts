import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { IBadges } from 'src/app/models/badges.model';

import { getAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AuthApi } from '../auth/auth.api';
import { IProfileModel } from 'src/app/models';
// import { AuthState } from 'src/app/states/auth';

@Injectable({
  providedIn: 'root'
})
export class BadgesApi {
  currUserId: string | undefined | null;
  constructor(private Nav: NavController, private firestore: Firestore, private authApi: AuthApi) {}//, private readonly authObject: Auth, 

  badges$() {
    // const id = this.authApi.getCurrentUserId();
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId!=undefined){
      sessionStorage.setItem('currUserId', this.currUserId);
    }else{
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    // alert(AuthState.currUserId);
    // alert("IN badges.api.ts");
    // alert(currUserId);
    const docRef = doc(
      this.firestore,
      `profiles/${this.currUserId}`
    ).withConverter<IBadges>({       //convert our firestore data into the IBadges type
      fromFirestore: (snapshot) => {
        const profile: IProfileModel = snapshot.data() as IProfileModel
        let badges: IBadges ={
          receivedBadges: profile.receivedBadges!,
          gymsVisited: profile.gymsVisited
        }
        return (badges);
      },
      toFirestore: (it: IBadges) => it,
    });
    return docData(docRef, { idField: 'id' });
  }

  otheruserbadges$(id: string) {
    const docRef = doc(
      this.firestore,
      `profiles/${id}`
    ).withConverter<IBadges>({       //convert our firestore data into the IBadges type
      fromFirestore: (snapshot) => {
        const profile: IProfileModel = snapshot.data() as IProfileModel
        let badges: IBadges ={
          receivedBadges: profile.receivedBadges!,
          gymsVisited: profile.gymsVisited
        }
        return (badges);
      },
      toFirestore: (it: IBadges) => it,
    });
    return docData(docRef, { idField: 'id' });
  }
}
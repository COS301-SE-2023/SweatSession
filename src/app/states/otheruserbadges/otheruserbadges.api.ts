import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { IBadges } from 'src/app/models/badges.model';
// import { BadgesRepository } from 'src/app/repository/badges.repository'

import { NavController } from '@ionic/angular';
@Injectable()
export class OtherUserBadgesApi {
  currUserId: string | undefined | null;
  constructor(private Nav: NavController, private firestore: Firestore) {}//, private readonly authObject: Auth, 

  otheruserbadges$(id: string) {
    const docRef = doc(
      this.firestore,
      `badges/${id}`
    ).withConverter<IBadges>({       //convert our firestore data into the IBadges type
      fromFirestore: (snapshot) => {
        return (snapshot.data() as IBadges);
      },
      toFirestore: (it: IBadges) => it,
    });
    return docData(docRef, { idField: 'id' });
  }
}
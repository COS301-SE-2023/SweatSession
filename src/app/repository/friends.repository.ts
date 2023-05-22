import { Injectable } from '@angular/core';
import { IAddFriend, IGetFriends, IGotFriends, IRemoveFriend } from '../models';
//import * as admin from 'firebase-admin';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepository {

  constructor() { }

  async getFriends(request: IGetFriends){
    // return await admin
    //   .firestore()
    //   .collection('profiles')
    //   .withConverter<IGotFriends>({
    //     fromFirestore: (snapshot) => {
    //       return snapshot.data() as IGotFriends;
    //     },
    //     toFirestore: (it: IGotFriends) => it,
    //   })
    //   .doc(request.userId)
    //   .get();
  }

  async addFriend(request: IAddFriend){

  }

  async removeFriend(request: IRemoveFriend){
    
  }
}
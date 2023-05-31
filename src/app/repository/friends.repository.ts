import { Injectable } from '@angular/core';
import { IAddFriend, IGetFriends, IGotFriends, IRemoveFriend } from '../models';
import * as admin from 'firebase-admin';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepository {

  constructor() { }

  async getFriends(request: IGetFriends){
    return await admin
      .firestore()
      .collection('profiles')
      .withConverter<IGotFriends>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IGotFriends;
        },
        toFirestore: (it: IGotFriends) => it,
      })
      .doc(request.userId)
      .get();
   // return this.getMock();
  }

  async addFriend(request: IAddFriend){

  }

  async removeFriend(request: IRemoveFriend){
    
  }

  getMock() : IGotFriends{
    const results : IGotFriends = {
        friends: [
            {
                id: "id 1",
                name: "Testing 1",
                profileUrl: ""
            },
            {
                id: "id 2",
                name: "Testing 2",
                profileUrl: ""
            },
            {
                id: "id 3",
                name: "Testing 3",
                profileUrl: ""
            },
            {
                id: "id 4",
                name: "Testing 4",
                profileUrl: ""
            },
            {
                id: "id 5",
                name: "Testing 5",
                profileUrl: ""
            },
            {
                id: "id 6",
                name: "Testing 6",
                profileUrl: ""
            },
            {
                id: "id 7",
                name: "Testing 7",
                profileUrl: ""
            },
            {
                id: "id 8",
                name: "Testing 8",
                profileUrl: ""
            }
        ]
    }
    return results;
}
}
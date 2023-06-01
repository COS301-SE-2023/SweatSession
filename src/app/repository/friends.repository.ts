import { Injectable } from '@angular/core';
import { IAddFriend,
     IFriendsModel, 
     IGetFriends, 
     IGotFriends, 
     IRemoveFriend } 
     from '../models';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepository {

  constructor() { }

  async getFriends(request: IGetFriends){
    // return await admin
    //   .firestore()
    //   .collection('friends')
    //   .withConverter<IFriendsModel[]>({
    //     fromFirestore: (snapshot) => {
    //       return snapshot.data() as IFriendsModel[];
    //     },
    //     toFirestore: (it: IFriendsModel[]) => it,
    //   })
    //   .doc(request.userId)
    //   .get();
    //   .then(doc => {
    //     if (doc.exists) {
    //       const data = doc.data();
    //       // Handle retrieved data
    //     } else {
    //       // Document doesn't exist
    //     }
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
       return this.getMock();
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
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
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

  constructor(private firebase: AngularFirestore) { }

  async getFriends(request: IGetFriends){
    // const collectionRef: AngularFirestoreCollection<IProfileModel> = this.firestore.collection('profiles');
    // collectionRef.add(newProfile)
    //     .then((docRef) => {
    //         console.log('Document created successfully with ID:', docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error('Error creating document:', error);
    //     });
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
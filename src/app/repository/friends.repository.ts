import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAddFriend,
     IAddedFriend,
     IFriendsModel, 
     IGetFriends, 
     IGotFriends, 
     IRemoveFriend, 
     IRemovedFriend} 
     from '../models';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepository {
    /**
     * collection: friends{
     *  document: userId {
     *      collection: friends {
     *          document: id { 
     *              name: string,
     *              profileUrl: string 
     *          }
     *      }
     *  }
     * }
     * 
     * 
     */
  constructor(private firestore: AngularFirestore) { }

  getFriends(request: IGetFriends): Observable<IGotFriends> {
    const friendsCollection = this.firestore.collection<IFriendsModel>(
      `friends/${request.userId}/userFriends`
    );
  
    return friendsCollection.snapshotChanges().pipe(
      map((snapshot) => {
        const friends: IFriendsModel[] = [];
  
        snapshot.forEach((doc) => {
          const friend = {
            ...doc.payload.doc.data(),

          };
          friends.push(friend);
        });
  
        return {
          userId: request.userId,
          friends: friends,
          validate: true,
        };
      })
    );
  }


  async addFriend(request: IAddFriend){
    try {
        const docRef = await this.firestore
        .collection("friends")
        .doc(request.userId)
        .collection("userFriends")
        .doc(request.friend.userId)
        .set(request.friend)

        const friendDocRef = await this.firestore
        .collection("friends")
        .doc(request.friend.userId)
        .collection("userFriends")
        .doc(request.userId)
        .set({userId: request.userId,
            name: "you",
            profileUrl: "assets/sweatsessionlogotransparent1.png"
        })


        const friend: IFriendsModel ={
            ...request.friend
        }
        const response: IAddedFriend = {
            userId: request.userId,
            friend: friend,
            validate: true
        }
        return response;
    }catch(error) {
        alert("error: "+ error);
        const response: IAddedFriend = {
            userId: request.userId,
            validate: false,
        }
        return response;
    }
  }

  async removeFriend(request: IRemoveFriend){
    try {
        //remove from own document
        const docRef = await this.firestore
        .collection("friends")
        .doc(request.userId)
        .collection("userFriends")
        .doc(request.friend.userId)
        .delete()

        //remove from friend document
        const docRefFriend = await this.firestore
        .collection("friends")
        .doc(request.friend.userId)
        .collection("userFriends")
        .doc(request.userId)
        .delete()

        //response
        const response: IRemovedFriend = {
            userId: request.userId,
            validate: true
        }
        return response;
    }catch(error) {
        alert("error: "+ error);
        const response: IRemovedFriend = {
            userId: request.userId,
            validate: false,
        }
        return response;
    }
  }
}
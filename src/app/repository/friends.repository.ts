import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
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

  async getFriends(request: IGetFriends){
    try {
        const docRef = await this.firestore.collection("friends")
                .doc(request.userId)
                .collection("userFriends")
                .get()
                .toPromise();
    
        let friends: IFriendsModel[] = [];

        docRef!.forEach((doc)=>{
            const friend = {
                ...doc.data() as IFriendsModel,
            }
            friends.push(friend);
        })

        const response: IGotFriends = {
            userId: request.userId,
            friends: friends,
            validate: true
        }
        // alert('Friends fetched successfully');
        return response;

    }catch(error){
        alert("error: "+ error)
        const response: IGotFriends = {
            userId: request.userId,
            friends: [],
            validate: false
        }

        return response;
    }
  }

  async addFriend(request: IAddFriend){
    try {
        const docRef = await this.firestore
        .collection("friends")
        .doc(request.userId)
        .collection("userFriends")
        .doc(request.friend.userId)
        .set(request.friend)


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

        // //remove from friend document
        // const docRefFriend = await this.firestore
        // .collection("friends")
        // .doc(request.friend.userId)
        // .collection("userFriends")
        // .doc(request.userId)
        // .delete()

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
import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IAddFriend,
     IAddedFriend,
     IFriendRequest,
     IFriendsModel, 
     IGetFriends, 
     IGotFriends, 
     IProfileModel, 
     IRemoveFriend, 
     IRemovedFriend} 
     from '../models';
import { BadgesRepository } from './badges.repository';
import { OtheruserRepository } from './otheruser.repository';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepository {
  // friendsCount$: Observable<number | undefined>;
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
  constructor(private firestore: AngularFirestore, private repository: OtheruserRepository, private badgesRepository: BadgesRepository) { }

  getFriends(request: IGetFriends): Observable<IGotFriends> {
    const friendsCollection = this.firestore.collection<IFriendsModel>(
      `friends/${request.userId}/userFriends`
    );
  
    return friendsCollection.snapshotChanges().pipe(
      map((snapshot) => {
        let friends: IFriendsModel[] = [];
  
        snapshot.forEach(async (doc) => {
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
    return (await this.repository.getProfile(request)).pipe(
      map((res)=>{
        const docRef = this.firestore
        .collection("friends")
        .doc(request.userId)
        .collection("userFriends")
        .doc(request.friend.userId)
        .set(request.friend)

        const friendDocRef = this.firestore
        .collection("friends")
        .doc(request.friend.userId)
        .collection("userFriends")
        .doc(request.userId)
        .set(res)

        const friend: IFriendsModel ={
          ...request.friend
        }
        const response: IAddedFriend = {
            userId: request.userId,
            friend: friend,
            validate: true
        }

        const myFriends = this.firestore
        .collection("friends")
        .doc(request.userId)
        .collection("userFriends");

        // this.friendsCount$ = myFriends.valueChanges().pipe(
        //   map((friends: any[]) => friends.length)
        // );
        const friendsCountRef = this.firestore
        .collection("friends")
        .doc(request.userId)
        .collection("userFriends");
        
        const friendsCountSnapshot$: Observable<QuerySnapshot<any>> = friendsCountRef.get();

        friendsCountSnapshot$.subscribe((friendsCountSnapshot: QuerySnapshot<any>) => {
          const friendsCount: number = friendsCountSnapshot.size;
    
          if (friendsCount == 5){
            this.badgesRepository.socialiteBadge(request.userId);
          }
        });
        return response;
        })
    );
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

  async createFriendRequest(request: IFriendRequest){
    const docRef = await this.firestore
      .doc<IProfileModel>(`profiles/${request.to}`)
    
    docRef.get().pipe(
      map((doc)=>{
        let profile = doc.data()
        if(profile) {
          let fRequest:string[] = [];
          profile.friendRequests ? fRequest = profile.friendRequests : fRequest = []
          fRequest.push(request.from)

          docRef.update({friendRequests: fRequest})
        }
      })
    ).subscribe()
  }

  async removeFriendRequest(request: IFriendRequest){
    const docRef = await this.firestore
    .doc<IProfileModel>(`profiles/${request.to}`)
  
  docRef.get().pipe(
    map((doc)=>{
      let profile = doc.data()
      if(profile) {
        let fRequest = profile.friendRequests?.filter((userId)=> !userId.match(request.from!))
        alert(request.from);
        docRef.update({friendRequests: fRequest})
      }
    })
  ).subscribe();
  }
}
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';
import { IRequestToAdd } from 'src/app/models';
import { Notice, Profile } from 'src/app/models/notice.model';
import { ProfileRepository } from 'src/app/repository/profile.repository';

@Injectable({
  providedIn: 'root'
})


export class NoticeService {

  auth = getAuth();
  currUserId = this.auth.currentUser?.displayName;

  constructor(private readonly firestore: Firestore, private readonly profileRepository: ProfileRepository ) {}


  getNotices():Observable<Notice[]> {
    return collectionData<Notice>(collection(this.firestore, 'Notifications'), {
      idField: 'id',
    });
  }

  getTheNoticeProfile():Observable<Profile[]>{
    return collectionData<Profile>(collection(this.firestore, "profiles"), {
    idField: 'id',
   });
  }

  deleteNotices(id :string): Promise<void> {
    const noticeDocRef = doc(this.firestore, `Notifications/${id}`);
    return deleteDoc(noticeDocRef);
  }

  rejectFriend(senderid: string , senttoid: string){
    const friendRef = doc(this.firestore, "friends", senderid, "userFriends", senttoid);
    return deleteDoc(friendRef);
  }

  async createNotices(SenderName: string , SentDate: string , Message: string , UserId: string , SenderId: string , ProfileUrl: string){
    await addDoc(collection(this.firestore , 'Notifications'), {
      senttoid: UserId ,
      senderid: SenderId , 
      sendername: SenderName ,
      profileurl: ProfileUrl , 
      sentdate: SentDate , 
      message: Message ,

    });
  }

  requestToJoinWorkout(request: IRequestToAdd) {
    this.profileRepository.getUserProfile(request.senderId).then((profile)=>{
      addDoc(collection(this.firestore , 'Notifications'), {
        senttoid: request.receiverId,
        senderid: request.senderId, 
        message: 'Added you to join a workout session',
        scheduleid: request.scheduleId,
        sendername: profile.displayName,
        profileurl: profile.profileURL,
        scheduleRequest: request,
      })
    })
  }
}

import { Injectable } from '@angular/core';
import { collectionData, collection, addDoc, Firestore, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Notice } from 'src/app/models/notice.model';

@Injectable({
  providedIn: 'root'
})


export class NoticeService {

   auth = getAuth();
   currUserId = this.auth.currentUser?.displayName;

  constructor(private readonly firestore: Firestore) { }


  getNotices():Observable<Notice[]> {
    return collectionData<Notice>(collection(this.firestore, 'Notifications'), {
      idField: 'id',
    });
  }

  deleteNotices(id :string): Promise<void> {
    const noticeDocRef = doc(this.firestore, `Notifications/${id}`);
    return deleteDoc(noticeDocRef);
  }

  async createNotices(SenderName: string , SentDate: string , Message: string , UserId: string){
    
    await addDoc(collection(this.firestore , 'Notifications'), {
      userid: UserId , 
      sendername: SenderName , 
      sentdate: SentDate , 
      message: Message
    });


  }
  

}

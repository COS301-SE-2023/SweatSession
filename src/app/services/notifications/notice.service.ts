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
   currUserId = this.auth.currentUser?.uid;

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

  async createNotices(SenderName: string , SentDate: string , Message: string){
    
    await setDoc(doc(this.firestore , 'Notifications', ""+this.currUserId), {
      userid: this.currUserId , 
      sendername: SenderName , 
      sentdate: SentDate , 
      message: Message
    });


  }
  

}

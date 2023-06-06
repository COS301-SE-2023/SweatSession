import { Injectable } from '@angular/core';
import { collectionData, collection, addDoc, Firestore, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notice } from 'src/app/models/notice.model';

@Injectable({
  providedIn: 'root'
})


export class NoticeService {

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
  

}

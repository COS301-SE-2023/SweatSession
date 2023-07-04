import { Injectable } from "@angular/core";
import { IMessage, IDeleteMessage, IGetChatFriends, IGetMessages, IGotMessages, ISendMessage } from "../models";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable, map } from "rxjs";
import { doesNotReject } from "assert";

@Injectable({
    providedIn: 'root'
  })
  export class MessageRepository {

    constructor(private firestore: AngularFirestore) {}

    async sendMessage(request: ISendMessage) {

    }
  
    async getChatFriends(request: IGetChatFriends) {
  
    }
  
    getMessages(request: IGetMessages): Observable<IGotMessages> {
        const messageCollection = this.firestore.collection<IMessage>(`messages/${request.userId}/${request.otheruserId}`);

        return messageCollection.snapshotChanges().pipe(
            map((snapshot)=>{
                let messages: IMessage[] = [];

                snapshot.forEach((doc)=>{
                    const message = {
                        ...doc.payload.doc.data()
                    }

                    messages.push(message);
                })

                return {
                    chats: messages,
                    validate: true
                }
            })
        )
    }
  
    async deleteMessage(request: IDeleteMessage) {
  
    }
  }
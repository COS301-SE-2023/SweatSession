import { Injectable } from "@angular/core";
import { IMessage, IDeleteMessage, IGetChatFriends, IGetMessages, IGotMessages, ISendMessage, IChatFriend, IProfileModel, IDeletedMessage, IGotChatsFriends } from "../models";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from "@angular/fire/compat/firestore";
import { Observable, combineLatest, from, last, lastValueFrom, map, mergeMap, of, switchMap, toArray } from "rxjs";
import { GetChatFriends } from "../actions";

@Injectable({
    providedIn: 'root'
  })
  export class MessageRepository {

    constructor(private firestore: AngularFirestore) {}

    async sendMessage(request: ISendMessage) {
        //add to current user collection
        const messageDoc = this.firestore
            .collection<IMessage>(`messages/${request.chat.senderId}/${request.chat.receiverId}`)
            .doc();
            messageDoc.set(request.chat);

        //add to receiver collection
        const otheruserMessegeDoc = this.firestore
            .collection<IMessage>(`messages/${request.chat.receiverId}/${request.chat.senderId}`)
            .doc();
            otheruserMessegeDoc.set(request.chat);

        //update user collection
        const currentUserDoc= this.firestore
            .collection(`users/${request.chat.senderId}/chatFriends`)
            .doc(`${request.chat.receiverId}`)
            .set({
                userId: request.chat.receiverId,
                lastChatId:  messageDoc.ref.id
            })

        const chatFriendsDoc= this.firestore
            .collection(`users/${request.chat.receiverId}/chatFriends`)
            .doc(`${request.chat.senderId}`)
            .set({
                userId: request.chat.senderId,
                lastChatId:  otheruserMessegeDoc.ref.id
            })
    }

    getChatFriends(request: IGetChatFriends): Observable<IGotChatsFriends> {
      const chatFriendsCollection = this.firestore.collection(`users/${request.userId}/chatFriends`);

      return chatFriendsCollection.snapshotChanges().pipe(
        map((snapshot) => {
          let chatFriends: IChatFriend[] = [];

          snapshot.forEach(async (doc)=> {
              const chatFriendData:any = doc.payload.doc.data();
              this.getProfile(chatFriendData.userId).then((response)=>{
              let chatFriend: IChatFriend = {
                user: response
              }

              const getMessage: IGetMessages = {
                userId: response.userId,
                messageId: chatFriendData.lastChatId,
                otheruserId: request.userId!
              }
              this.getChat(getMessage).then((response)=>{
                chatFriend.lastChat = response;
                chatFriends.push(chatFriend);
              })
            })
          })

          const response:IGotChatsFriends = {
            chatFriends: chatFriends,
            validate: true
          }
          
          return response;
        })
      )
    }
    
    getMessages(request: IGetMessages): Observable<IGotMessages> {
        const messageCollection:AngularFirestoreCollection<IMessage> = this.firestore.collection<IMessage>(`messages/${request.userId}/${request.otheruserId}`,(ref) =>
        ref.orderBy('date', 'asc'));

        return messageCollection.snapshotChanges().pipe(
            map((snapshot) => {
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

    deleteMessage(request: IDeleteMessage) {
       try {
        const messageDoc = this.firestore.doc(`messages/${request.userId}/${request.otheruserId}/${request.messageId}`).delete();

        const response:IDeletedMessage = {
            validate: true
        }

        return response;
       }catch(error) {
        alert("alert: "+error);
        const response:IDeletedMessage = {
            validate: false
        }

        return response;
       }
    }

    async getProfile(userId: string) {
        const profileDoc = this.firestore.doc<IProfileModel>(`profiles/${userId}`).get();
        const profile: IProfileModel = (await lastValueFrom(profileDoc)).data()!;

        return profile;
    }

    async getChat(request: IGetMessages) {
        const messageDoc = this.firestore.doc<IMessage>(`messages/${request.otheruserId}/${request.userId}/${request.messageId}`).get();
        const message: IMessage = (await lastValueFrom(messageDoc)).data()!;
       
        return message;
    }
  }
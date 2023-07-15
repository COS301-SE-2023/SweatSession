import { Injectable } from "@angular/core";
import { IMessage,
   IDeleteMessage, 
   IGetChatFriends, 
   IGetMessages, 
   IGotMessages, 
   ISendMessage, 
   IChatFriend, 
   IProfileModel, 
   IDeletedMessage, 
   IGotChatsFriends, 
   IGetGroups, 
   IGroup, 
   IAddChatGroup} from "../models";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable,lastValueFrom, map } from "rxjs";

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

    async sendGroupMessage(request: ISendMessage) {
      const messageDoc = this.firestore
        .collection<IMessage>(`groups/${request.chat.receiverId}/messages`)
        .doc();
        messageDoc.set(request.chat);
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
        let messageCollection:AngularFirestoreCollection<IMessage>;
        
        if(!request.isGroup) {
          messageCollection = this.firestore.collection<IMessage>(`messages/${request.userId}/${request.otheruserId}`,(ref) =>
          ref.orderBy('date', 'asc'));  
        }else {
          messageCollection = this.firestore.collection<IMessage>(`groups/${request.otheruserId}/messages`,(ref) => 
          ref.orderBy('date', 'asc'));
        }
       
        return messageCollection.snapshotChanges().pipe(
            map((snapshot) => {
                let messages: IMessage[] = [];

                snapshot.forEach((doc)=>{
                    const message = {
                        ...doc.payload.doc.data(),
                        id: doc.payload.doc.id
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

    getGroups(request: IGetGroups) {
      const groupCollection: AngularFirestoreCollection<IGroup> = this.firestore.collection<IGroup>(`users/${request.userId}/userGroups`);

      return groupCollection.snapshotChanges().pipe(
        map((snapshot)=>{
          let groups: IGroup[] = [];

          snapshot.forEach((doc)=>{
            const group = {
              ...doc.payload.doc.data()
            }

            groups.push(group);
          })

          return {
            groups: groups,
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

    async addChatGroup(request: IAddChatGroup) {
      const groupCollection = this.firestore
      .collection<IGroup>(`users/${request.userId}/userGroups`)
      .doc()
      .set(request.group);
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
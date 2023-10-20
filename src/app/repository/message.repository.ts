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
   IAddChatGroup,
   IJoinGroup,
   IExitChatGroup,
   IRemoveChatGroup,
   IGetGroup,
   IRemoveChatGroupUser,
   IDeleteGroupMessage} from "../models";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable,lastValueFrom, map, tap } from "rxjs";
import { NotifyService } from "../services/notify/notify.service";
import { NavigationService } from "../services";
import { NavController } from "@ionic/angular";

@Injectable({
    providedIn: 'root'
  })
  export class MessageRepository {

    constructor(private firestore: AngularFirestore, 
      private notify: NotifyService, 
      private navigation: NavigationService, 
      private router: NavController) {}

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
     try {
      const groupDoc = this.firestore.doc<IGroup>(`groups/${request.chat.receiverId}`).get();
      const group = (await lastValueFrom(groupDoc)).data();
      if(group && group.members?.includes(request.chat.senderId!)) {
        const messageDoc = this.firestore
        .collection<IMessage>(`groups/${request.chat.receiverId}/messages`)
        .doc();
        messageDoc.set(request.chat);
      } else {
        this.notify.presentFailureToast("Failed, you are not a member anymore");
        this.router.navigateRoot("/home");
      }
     } catch(error) {
      console.log(error);
     }
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

    getUserGroups(request: IGetGroups) {
      const groupCollection: AngularFirestoreCollection<IGroup> = this.firestore.collection<IGroup>(`users/${request.userId}/userGroups`);

      return groupCollection.snapshotChanges().pipe(
        map((snapshot)=>{
          let groups: IGroup[] = [];

          snapshot.forEach(async (doc)=>{
            const group = await this.getGroup(doc.payload.doc.id);
      
            groups.push(group);
          })

          return {
            groups: groups,
            validate: true
          }
        })
      )
    }

    getGroups(request: IGetGroups) {
      const groupCollection: AngularFirestoreCollection<IGroup> = this.firestore.collection<IGroup>(`groups`);

      return groupCollection.snapshotChanges().pipe(
        map((snapshot)=>{
          let groups: IGroup[] = [];

          snapshot.forEach(async (doc)=>{
           
            const group = {
              id: doc.payload.doc.id,
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

    async getGroup(groupId: string) {
      const docRef = this.firestore.doc<IGroup>(`groups/${groupId}`);
      let group: IGroup = (await lastValueFrom(docRef.get())).data()!;
      group = {
        ...group,
        id: docRef.ref.id
      }
      return group;
    }

    deleteMessage(request: IDeleteMessage) {
      try {
      const messageDoc = this.firestore.doc(`messages/${request.userId}/${request.otheruserId}/${request.messageId}`).delete();

      const response:IDeletedMessage = {
          validate: true
      }

      return response;
      }catch(error) {
      // alert("alert: "+error);
      const response:IDeletedMessage = {
          validate: false
      }

      return response;
      }
    }

    deleteGroupMessage(request: IDeleteGroupMessage) {
      try {
      const messageDoc = this.firestore.doc(`groups/${request.groupId}/messages/${request.messageId}`).delete();

      const response:IDeletedMessage = {
          validate: true
      }

      return response;
      }catch(error) {
      // alert("alert: "+error);
      const response:IDeletedMessage = {
          validate: false
      }

      return response;
      }
    }

    async addChatGroup(request: IAddChatGroup) {
      try{
        const groupDocument = await this.firestore
        .collection(`groups`)
        .add(request.group);

        const groupCollection = await this.firestore
        .collection<IGroup>(`users/${request.userId}/userGroups`)
        .doc(groupDocument.id)
        .set(request.group);
        await this.notify.presentSuccessToast("Group created successfully");
        this.router.navigateRoot('/home/messages')
      }catch(error){
        await this.notify.presentFailureToast("Group creation failed");
        // alert("ERROR: "+error)
      }
    }

    joinChatGroup(request: IJoinGroup) {
      try {
        const groupDocRef = this.firestore.doc<IGroup>(`groups/${request.group.id}`);
    
        groupDocRef.get().pipe(
          map((doc)=>{
            let group = doc.data();
            if(group) {
              if (!group.members?.includes(request.userId!)) {
                group.members?.push(request.userId!);
                groupDocRef.update({ members: group.members });
                this.firestore
                .collection<IGroup>(`users/${request.userId}/userGroups`)
                .doc(request.group.id)
                .set(request.group);
                this.notify.presentSuccessToast(`Joined group successfully`)
              } else {
                throw 'error: Already a member.'
              }
            }
          })
        ).subscribe();
      } catch (error) {
        this.notify.presentFailureToast("You are already a member");
      }
    }

    async exitChatGroup(request: IExitChatGroup) {
      try{
        const userGroupsCollection = await this.firestore
        .collection(`users/${request.userId}/userGroups`)
        .doc<IGroup>(request.group.id)
        .delete();

        const groupDoc = await this.firestore
          .doc<IGroup>(`groups/${request.group.id}`);

        const group = groupDoc.get().pipe(
          map((r)=>{
            let group = r.data();
            if(group?.createBy != request.userId) {
              let members = group?.members?.filter((userId)=> !userId.match(request.userId!))
              groupDoc.update({
                members: members
              });
              this.notify.presentSuccessToast("You left the group");
            } else {
              throw "Error: Owner can not leave a group";
            }
          })
        ).subscribe();
      }catch(error){
        this.notify.presentFailureToast("Error occured, please try again");
      }
    }

    async removeChatGroup(request: IRemoveChatGroup) {
      try{
        const groupDoc = await this.firestore
        .doc<IGroup>(`groups/${request.group.id}`);

        groupDoc.get().pipe(
          map((r)=>{
            let group: IGroup = r.data() as IGroup;
            let members = group?.members;
            members?.forEach((userId)=>{
              const userGroupDoc = this.firestore
                .doc<IGroup>(`users/${request.userId}/userGroups/${request.group.id}`)
                .delete();
            })

            groupDoc.delete();
            this.navigation.back();
            this.notify.presentSuccessToast(`${group?.displayName} removed successfully`)
          })
        ).subscribe();
      }catch(error){
        this.notify.presentFailureToast(`Failed to remove group`)
        console.log(error);
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

    async getUser(userId: string) {
      const profileDoc = this.firestore.doc<IProfileModel>(`profiles/${userId}`).get();
      const profile: IProfileModel = (await lastValueFrom(profileDoc)).data()!;
      
      return profile;
    }

    async removeChatGroupUser(request: IRemoveChatGroupUser) {
      try {
        const docRef=  this.firestore.doc<IGroup>(`groups/${request.groupId}`);
        docRef.get().pipe(
          map((doc)=>{
            const group = doc.data();
            if(request.userId != group?.createBy) {
              if(request.groupId == docRef.ref.id && group?.admin?.includes(request.adminId)) {
                group.members = group?.members?.filter((userId)=> userId != request.userId);
                this.firestore
                .doc<IGroup>(`users/${request.userId}/userGroups/${request.groupId}`)
                .delete();
                docRef.update({members: group.members})
                this.notify.presentSuccessToast("Group member removed successfully");
              } else {
                this.notify.presentFailureToast(`Failed to remove user. You are not an admin!`);
              }
            } else {
              console.log("Can't remove the owner of the group");
            }
          })
        ).subscribe();
      } catch(error) {
        this.notify.presentFailureToast(`Failed to remove user`)
      }
    }
  }
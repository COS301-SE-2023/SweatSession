import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IMessage, IChatFriend, IGetChatFriends, IGetMessages, ISendMessage, IDeleteMessage, IProfileModel, IFriendsModel, IGroup, IGetGroups, IAddChatGroup, IJoinGroup, IRemoveChatGroup, IExitChatGroup, IGetGroup } from "src/app/models";
import { DeleteMessage, GetMessages, SendMessage, GetChatFriends, StageChatFriend, GetFriendsProfiles, GetChatFriend, RemoveChatFriendSession, SendGroupMessage, RemoveChatGroupSession, GetGroups, AddChatGroup, JoinChatGroup, RemoveChatGroup, ExitChatGroup, StageChatGroup, GetGroupMessages, GetGroup } from 'src/app/actions';
import { AuthApi } from "../auth";
import { FriendsService, MessagesService, OtheruserService } from "src/app/services";
import { tap } from "rxjs";
import { Navigate } from "@ngxs/router-plugin";
import { stringify } from "querystring";

export interface MessagesStateModel {
    chats?: IMessage[];
    chatFriends?: IChatFriend[];
    chatFriend?: string;
    friendProfiles?: IProfileModel[];
    f?: IFriendsModel[];
    chatFriendProfile?: IProfileModel;
    chatGroups?: IGroup[];
    chatGroup?: IGroup;
}

@State<MessagesStateModel>({
    name: "messages",
    defaults: {
        chats: [],
        chatFriends: [],
        chatFriend: "",
        friendProfiles: [],
        f: [],
        chatFriendProfile: {},
        chatGroups: [],
        chatGroup: {}
    }
})

@Injectable({
    providedIn: 'root'
})
export class MessagesState {
    constructor(private authApi:AuthApi, private service: MessagesService, private friendsService: FriendsService, private otheruserService: OtheruserService) {}

    @Action(GetChatFriends)
    async getChatFriends (ctx: StateContext<MessagesStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            const request: IGetChatFriends = {
                userId: currentUserId
            }

            return (await this.service.getChatFriends(request)).pipe(
                tap((response)=>{
                    console.log(response)
                    ctx.patchState({
                        chatFriends: response.chatFriends
                    })
                })
            )
        }else {
            return ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Action(GetMessages)
    async getMessages (ctx: StateContext<MessagesStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
                const otheruserId = sessionStorage.getItem('chatFriend');
                const request: IGetMessages ={
                    userId: currentUserId,
                    otheruserId: otheruserId!,
                    isGroup: false
                }
                return(await this.service.getMessages(request)).pipe(
                    tap((response)=>{
                        ctx.setState({
                            ...ctx.getState(),
                            chats: response.chats
                        })
                    })
                )
        }else {
            return ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Action(GetGroupMessages)
    async getGroupMessages (ctx: StateContext<MessagesStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
                const otheruserId = sessionStorage.getItem('chatGroup');
                const request: IGetMessages ={
                    userId: currentUserId,
                    otheruserId: otheruserId!,
                    isGroup: true
                }
                return(await this.service.getMessages(request)).pipe(
                    tap((response)=>{
                        ctx.setState({
                            ...ctx.getState(),
                            chats: response.chats
                        })
                    })
                )
        }else {
            return ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Action(SendMessage)
    async sendMessage(ctx: StateContext<MessagesStateModel>, {payload}: SendMessage) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            payload.senderId = currentUserId;
            payload.receiverId = sessionStorage.getItem('chatFriend')!;
            const request: ISendMessage = {
                chat: payload
            }
            this.service.sendMessage(request);
        }else {
            ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Action(SendGroupMessage)
    async sendGroupMessage(ctx: StateContext<MessagesStateModel>, {payload}: SendGroupMessage) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            payload.senderId = currentUserId;
            const group = JSON.parse(sessionStorage.getItem('groupChat')!);
            payload.receiverId = group.id;
            const request: ISendMessage = {
                chat: payload
            }
            this.service.sendGroupMessage(request);
        }else {
            ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Action(DeleteMessage)
    async deleteMessage(ctx: StateContext<MessagesStateModel>, {payload}: DeleteMessage) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
           const request:IDeleteMessage = {
                userId: currentUserId,
                messageId: payload.id!
            }

            if(currentUserId === payload.senderId)
                request.otheruserId = payload.receiverId
            else
                request.otheruserId = payload.senderId
            await this.service.deleteMessage(request);
        }else {
            ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Action(StageChatFriend)
    async stageChatFriend(ctx: StateContext<MessagesStateModel>, {payload}: StageChatFriend) {
        sessionStorage.setItem('chatFriend', payload);
        ctx.patchState({
            chatFriend: payload
        })

        return ctx.dispatch(new Navigate(['chatroom']));
    }

    @Action(StageChatGroup)
    async stageChatGroup(ctx: StateContext<MessagesStateModel>, {payload}: StageChatGroup) {
        ctx.patchState({
            chatGroup: payload
        })
        sessionStorage.setItem('chatGroup',JSON.stringify(payload));
        return ctx.dispatch(new Navigate(['groupchatroom']));
    }

    @Action(GetChatFriend)
    async getChatFriend(ctx: StateContext<MessagesStateModel>) {
        const userId = sessionStorage.getItem('chatFriend');
        if(userId) {
            const request: IProfileModel ={
                userId: userId
            }
            return(await this.otheruserService.getProfile(request)).pipe(
                tap((response)=>{
                    ctx.patchState({
                        chatFriendProfile: response
                    })
                })
            )
        }
        return;
    }

    @Action(GetFriendsProfiles)
    async getFriendsProfiles (ctx: StateContext<MessagesStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();

        if(currentUserId) {
            const request: IGetChatFriends = {
                userId: currentUserId
            };

            return (await this.friendsService.getFriends(request)).pipe(
                tap((response)=>{
                    const friends: IFriendsModel[] = response.friends;
                    let friendsProfiles:IProfileModel[] = [];

                    friends.forEach((friend)=>{
                        this.service.getProfile(friend.userId!).then((response)=>{
                            friendsProfiles.push(response);
                        })
                    })

                    ctx.setState({
                        ...ctx.getState(),
                        friendProfiles: friendsProfiles
                    })
                })
            );
        }
        return;
    }

    @Action(GetGroups)
    async getChatGroups (ctx: StateContext<MessagesStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();

        if(currentUserId) {
           const request: IGetGroups = {
            userId: currentUserId
           }

           return (await this.service.getGroups(request)).pipe(
            tap((response)=>{
                const groups: IGroup[] = response.groups;

                ctx.patchState({
                    chatGroups: groups
                })
                console.table(groups);
            })
           )
        }
        return;
    }

    @Action(AddChatGroup)
    async addGroupChat(ctx: StateContext<MessagesStateModel>,{payload}: AddChatGroup) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            payload.admin = [currentUserId];
            payload.members = [currentUserId];
            payload.createBy = currentUserId;
            const request:IAddChatGroup = {
                userId: currentUserId,
                group: payload
            }
            this.service.addChatGroup(request);
        }
    }

    @Action(RemoveChatFriendSession)
    async removeChatFriendSession() {
        sessionStorage.removeItem('chatFriend');
    }

    @Action(RemoveChatFriendSession)
    async removeChatGroupSession() {
        sessionStorage.removeItem('chatGroup');
    }

    @Action(JoinChatGroup)
    async joinChatGroup(ctx: StateContext<MessagesStateModel>, {payload}: JoinChatGroup) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            payload.members?.push(currentUserId);
            const request: IJoinGroup = {
                userId: currentUserId,
                group: payload
            }
            this.service.joinChatGroup(request);
        }
    }

    @Action(RemoveChatGroup)
    async removeChatGroup(ctx: StateContext<MessagesStateModel>, {payload}: RemoveChatGroup) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            const request: IRemoveChatGroup = {
                userId: currentUserId,
                group: payload
            }

            this.service.removeChatGroup(request);
        }
    }

    @Action(ExitChatGroup)
    async exitChatGroup(ctx: StateContext<MessagesStateModel>, {payload}: ExitChatGroup) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            const request: IExitChatGroup = {
                userId: currentUserId,
                group: payload
            }
            this.service.exitChatGroup(request);
        }
    }

    // @Action(GetGroup)
    // async getGroup(ctx: StateContext<MessagesStateModel>, {payload}:GetGroup) {
    //     const request: IGetGroup = {
    //         groupId: sessionStorage.getItem("chatFriend")!
    //     }
    // }

    @Selector()
    static returnChats(state: MessagesStateModel) {
        return state.chats;
    }

    @Selector()
    static returnChatFriends(state: MessagesStateModel) {
        return state.chatFriends;
    }

    @Selector()
    static returnFriendsProfiles(state: MessagesStateModel) {
        return state.friendProfiles;
    }

    @Selector()
    static returnChatFriendProfile(state: MessagesStateModel) {
        return state.chatFriendProfile;
    }

    @Selector()
    static returnGroups(state: MessagesStateModel) {
        return state.chatGroups;
    }
}
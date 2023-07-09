import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IMessage, IChatFriend, IGetChatFriends, IGetMessages, ISendMessage, IDeleteMessage, IProfileModel, IFriendsModel } from "src/app/models";
import { DeleteMessage, GetMessages, SendMessage, GetChatFriends, StageChatFriend, GetFriendsProfiles } from 'src/app/actions';
import { AuthApi } from "../auth";
import { FriendsService, MessagesService } from "src/app/services";
import { tap } from "rxjs";
import { Navigate } from "@ngxs/router-plugin";

export interface MessagesStateModel {
    chats?: IMessage[];
    chatFriends?: IChatFriend[];
    chatFriend?: string;
    friendProfiles?: IProfileModel[];
    f?: IFriendsModel[];
}

@State<MessagesStateModel>({
    name: "messages",
    defaults: {
        chats: [],
        chatFriends: [],
        chatFriend: "",
        friendProfiles: [],
        f: []
    }
})

@Injectable({
    providedIn: 'root'
})
export class MessagesState {
    constructor(private authApi:AuthApi, private service: MessagesService, private friendsService: FriendsService) {}

    @Action(GetChatFriends)
    async getChatFriends (ctx: StateContext<MessagesStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
            const request: IGetChatFriends = {
                userId: currentUserId
            }

            return (await this.service.getChatFriends(request)).pipe(
                tap((response)=>{
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
    async getMessages (ctx: StateContext<MessagesStateModel>, {payload}: GetMessages) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
                const request: IGetMessages ={
                    userId: payload.userId,
                    otheruserId: payload.otheruserId
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
            const request: ISendMessage = {
                chat: payload
            }
            this.service.sendMessage(request);
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
                messageId: payload.id
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
    }

    @Action(GetFriendsProfiles)
    async getFriendsProfiles (ctx: StateContext<MessagesStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();

        if(currentUserId) {
            const request: IGetChatFriends = {
                userId: currentUserId
            };

            (await this.friendsService.getFriends(request)).pipe(
                tap((response)=>{
                    const friends: IFriendsModel[] = response.friends;
                    console.table(friends);
                    let friendsProfiles:IProfileModel[] = [];

                    friends.forEach((friend)=>{
                        this.service.getProfile(friend.userId!).then((response)=>{
                            friendsProfiles.push(response);
                            ctx.setState({
                                ...ctx.getState(),
                                friendProfiles: [...ctx.getState().friendProfiles!, response],
                                f: [...ctx.getState().f!,friend]
                            })

                        })
                    })

                    ctx.setState({
                        ...ctx.getState(),
                        friendProfiles: friendsProfiles
                    })
                })
            );
        }
    }

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
}
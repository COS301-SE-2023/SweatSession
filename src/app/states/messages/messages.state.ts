import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { IMessage, IChatFriend } from "src/app/models";
import { DeleteMessage, GetMessages, SendMessage, GetChatFriends, StageChatFriend } from 'src/app/actions';
import { AuthApi } from "../auth";

export interface MessagesStateModel {
    chats?: IMessage[];
    chatFriends?: IChatFriend[];
    chatFriend?: string;
}

@State<MessagesStateModel>({
    name: "messages",
    defaults: {
        chats: [],
        chatFriends: [],
        chatFriend: ""
    }
})

@Injectable({
    providedIn: 'root'
})
export class MessagesState {
    constructor(private authApi:AuthApi) {}

    @Action(GetChatFriends)
    async getChatFriends (ctx: StateContext<MessagesStateModel>) {

    }

    @Action(GetMessages)
    async getMessages (ctx: StateContext<MessagesStateModel>, {payload}: GetMessages) {

    }

    @Action(SendMessage)
    async sendMessage(ctx: StateContext<MessagesStateModel>, {payload}: SendMessage) {

    }

    @Action(DeleteMessage)
    async deleteMessage(ctx: StateContext<MessagesStateModel>, {payload}: DeleteMessage) {

    }

    @Action(StageChatFriend)
    async stageChatFriend(ctx: StateContext<MessagesStateModel>, {payload}: StageChatFriend) {

    }
}
import { IGetMessages, IMessage } from "../models";

export class GetChatFriends {
    static readonly type = "[messages] get chat friends";
}

export class GetMessages {
    static readonly type = "[messages] get messages";
    constructor() {}
}

export class SendMessage {
    static readonly type = "[messages] send a message";
    constructor(public payload: IMessage) {}
}

export class DeleteMessage {
    static readonly type = "[messages] delete a message";
    constructor(public payload: IMessage) {}
}

export class StageChatFriend {
    static readonly type = "[messages] sage chat friend";
    constructor(public payload: string) {}
}

export class GetFriendsProfiles {
    static readonly type = "[messages] get friends profiles";
}
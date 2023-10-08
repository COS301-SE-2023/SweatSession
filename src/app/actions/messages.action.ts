import { IGetMessages, IGroup, IMessage, IRemoveChatGroupUser } from "../models";

export class GetChatFriends {
    static readonly type = "[messages] get chat friends";
}

export class GetMessages {
    static readonly type = "[messages] get messages";
    constructor() {}
}

export class GetGroupMessages {
    static readonly type = "[messages] get group messages";
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

export class StageChatGroup {
    static readonly type = "[messages] sage chat group";
    constructor(public payload: IGroup) {}
}

export class GetFriendsProfiles {
    static readonly type = "[messages] get friends profiles";
}

export class GetChatFriend {
    static readonly type = "[messages] get chat friend";
}

export class RemoveChatFriendSession {
    static readonly type  = "[messages] remove chat friend from session storage";
}

export class RemoveChatGroupSession {
    static readonly type  = "[messages] remove chat group from session storage";
}

export class GetUserGroups {
    static readonly type = "[messages] get user groups";
}

export class GetGroups {
    static readonly type = "[messages] get groups";
}
export class SendGroupMessage {
    static readonly type = "[messages] send a group message";
    constructor(public payload: IMessage) {}
}

export class AddChatGroup {
    static readonly type = "[messages] add chat group";
    constructor(public payload: IGroup) {}
}

export class JoinChatGroup {
    static readonly type = "[messages] join a chat group";
    constructor(public payload: IGroup) {}
}

export class ExitChatGroup {
    static readonly type = "[chatGroup] exit a chat group";
    constructor(public payload: IGroup) {}
}

export class RemoveChatGroup {
    static readonly type = "[chatGroup] remove a chat group";
    constructor(public payload: IGroup) {}
}

export class GetGroup {
    static readonly type = "[chatGroup] get chat group info";
    constructor(public payload?: string) {}
}

export class GetUser {
    static readonly type = "[chatGroup] get group user";
    constructor(public payload: string) {}
}

export class StopChatFriendsLoading {
    static readonly type = "[messages] stop loading";
}

export class RemoveChatGroupUser {
    static readonly type = '[chatGroup] remove a user from a group';
    constructor(public payload: IRemoveChatGroupUser) {}
}
import { Timestamp } from "firebase/firestore";
import { IGroup, IProfileModel } from "./profile.model";

//chat interface
export interface IMessage {
    id?: string;
    senderId?: string;
    receiverId?: string;
    date?: Timestamp;
    text?: any;
}

//chat friends interfaces
export interface IChatFriend {
    user: IProfileModel;
    lastChat?: IMessage;
}

//group interface
export interface IChatGroup {
    group: IGroup;
    lastChat?: IMessage;
}

//get chats interfaces
export interface IGetMessages {
    userId?: string;
    messageId?: string;
    otheruserId: string;
    isGroup?: boolean;
}

export interface IGotMessages {
    chats?: IMessage[];
    validate: boolean;
}

//get chat buddies interfaces
export interface IGetChatFriends {
    userId: string;
}

export interface IGotChatsFriends {
    chatFriends: IChatFriend[];
    validate: boolean;
}

//send message interfaces
export interface ISendMessage {
    chat: IMessage;
}

export interface ISentMessage {
    validate: boolean;
}


//delete message interfaces
export interface IDeleteMessage {
    userId: string;
    otheruserId?: string;
    messageId: string;
}

export interface IDeletedMessage {
    validate: boolean;
}

export interface IAddChatGroup {
    userId?: string;
    group: IGroup;
}

export interface IAddedChatGroup {
    validate: boolean;
}

//get groups
export interface IGetGroups {
    userId: string;
}

export interface IGotGroups {
    groups: IGroup[];
    validate: boolean;
}

export interface IJoinGroup {
    userId: string;
    group: IGroup;
}

export interface IJoinedGroups {
    validate: boolean;
}

export interface IExitChatGroup {
    userId?: string;
    group: IGroup;
}

export interface IExitedChatGroup {
    validate: boolean;
}

export interface IRemoveChatGroup {
    userId?: string;
    group: IGroup;
}

export interface IGetGroup {
    groupId: string;
}

export interface IRemoveChatGroupUser {
    adminId: string;
    userId: string;
    groupId: string;
}
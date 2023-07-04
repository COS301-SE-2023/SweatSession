import { Timestamp } from "firebase/firestore";
import { IProfileModel } from "./profile.model";

//chat interface
export interface IMessage {
    id: string;
    senderId?: string;
    receiverId?: string;
    date?: Timestamp;
    text?: any;
}

//chat friends interfaces
export interface IChatFriend {
    user: IProfileModel;
    lastChat: IMessage;
}

//get chats interfaces
export interface IGetMessages {
    userId?: string;
    otheruserId: string;
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
    otheruserId: string;
}

export interface IDeletedMessage {
    validate: boolean;
}

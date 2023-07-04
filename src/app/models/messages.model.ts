import { Timestamp } from "firebase/firestore";
import { IProfileModel } from "./profile.model";

//chat interface
export interface IChat {
    id: string;
    senderId?: string;
    date?: Timestamp;
    text?: any;
}

//chat friends interfaces
export interface IChatFriend {
    user: IProfileModel;
    lastChat: IChat;
}

//get chats interfaces
export interface IGetChats {
    userId: string;
    otheruserId: string;
}

export interface IGotChats {
    chats?: IChat[];
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
    chat: IChat;
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

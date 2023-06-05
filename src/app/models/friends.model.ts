export interface IFriendsModel {
    id?: string;
    name?: string;
    profileUrl?: string;
}

//requests
export interface IGetFriends {
   userId: string;
}

export interface IRemoveFriend {
    userId: string;
    friend: IFriendsModel;
}

export interface IAddFriend {
    userId: string;
    friend: IFriendsModel;
}


//response
export interface IGotFriends {
    userId: string;
    friends: IFriendsModel[];
    validate: boolean;
}

export interface IRemovedFriend {
    userId: string;
    validate: boolean;
}

export interface IAddedFriend {
    userId: string;
    validate: boolean;
    friend?: IFriendsModel;
}
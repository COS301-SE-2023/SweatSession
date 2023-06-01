export interface IFriendsModel {
    id: string;
    name: string;
    profileUrl: string;
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
    friends: IFriendsModel[] | undefined;
}

export interface IRemovedFriend {
    validate: boolean;
}

export interface IAddedFriend {
    validate: boolean;
    friend: IFriendsModel;
}
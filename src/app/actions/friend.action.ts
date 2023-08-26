import { IFriendsModel} from "../models";


export class AddFriendAction {
    static readonly type = "[friends] Add Friend";
    constructor(public payload:IFriendsModel){}
}

export class RemoveFriendAction {
    static readonly type = "[friends] Remove Friend";
    constructor(public payload:IFriendsModel){}
}

export class GetFriendsAction {
    static readonly type = "[friends] Get Friends";
}

export class CreateFriendRequest {
    static readonly type = "[friends] create a friend request";
    constructor(public otheruserId: string) {}
}

export class RemoveFriendRequest {
    static readonly type = "[friends] remove a friend request";
    constructor(public otheruserId: string){}
}


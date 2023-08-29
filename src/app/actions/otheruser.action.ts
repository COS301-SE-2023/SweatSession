import { IFriendsModel, IProfileModel } from "../models";

export class LoadOtherUserProfile {
    static readonly type = "[otheruser] load profile of otheruser";
    constructor() {}
}

export class GetOtheruserFriends {
    static readonly type = "[otheruser] get friends for another user";
    constructor() {}
}

export class GetOtheruserSchedules {
    static readonly type = "[otheruser] get workout schedules for another user";
    constructor() {}
}

export class StageOtheruserInfo {
    static readonly type = "[otheruser] get otheruser profile info";
    constructor(public payload: IProfileModel | IFriendsModel) {}
}

export class RemoveUser {
    static readonly type = "[otheruser] remove user form localstorage";
    constructor() {}
}

export class GetOtheruserProfile {
    static readonly type = "[otheruser] get other user profile";
    constructor(public payload: IProfileModel) {}
}

export class CheckIFSendFriendRequest {
    static readonly type = "[otheruser] check if user send a friend request";
    constructor() {}
}
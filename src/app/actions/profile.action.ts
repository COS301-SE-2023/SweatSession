import { IUpdateProfile, IGetProfile } from "../models";


export class GetProfileAction {
    static readonly type = "[profile] Get Profile";
    constructor(public payload: IGetProfile) { }
}

export class UpdateProfileAction {
    static readonly type = "[profile] Update Profile";
    constructor(public payload: IUpdateProfile) { }
}

export class GetUsersAction {
    static readonly type = "[profile] get user profiles";
    constructor() { }
}

export class GetUsersRanked {
 static readonly type = "[] get users ranked by points";
 constructor() { }
}

import { IFriendsModel, IProfileModel } from "../models";

export class LoadOtherUserProfile {
    static readonly type = "[otheruser] load profile of otheruser";
    constructor() {}
}

export class StageOtheruserInfo {
    static readonly type = "[otheruser] get otheruser profile info";
    constructor(public payload: IProfileModel | IFriendsModel) {}
}
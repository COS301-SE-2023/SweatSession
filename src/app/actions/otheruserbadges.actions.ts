import { IBadges } from "../models/badges.model";

export class SubscribeToOtherUserBadges {
    static readonly type = '[OtherUserBadges] SubscribeToOtherUserBadges';
    // constructor(){alert("IN SubscribeToBadges");}
}

export class SetOtherUserBadges {
    static readonly type = '[OtherUserBadges] SetOtherUserBadges';
    constructor(public readonly otherUserBadges: IBadges | null | undefined) { }
}
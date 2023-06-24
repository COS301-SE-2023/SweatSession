import { IBadges } from "../models/badges.model";

export class SubscribeToOtherUserBadges {
    static readonly type = '[OtherUserBadges] SubscribeToOtherUserBadges';
    // constructor(){alert("IN SubscribeToBadges");}
}

export class SetOtherUserBadges {
    static readonly type = '[OtherUserBadges] SetOtherUserBadges';
    constructor(public readonly otherUserBadges: IBadges | null | undefined) { }
}

export class SetOtherUserBadgesId {
    static readonly type = '[OtherUserBadges] SetOtherUserBadgesId';
    constructor(public readonly otherUserBadgesId: String | null | undefined) { }
}

export class SetOtherUserBadgesName {
    static readonly type = '[OtherUserBadges] SetOtherUserBadgesName';
    constructor(public readonly otherUserBadgesName: String | null | undefined) { }
}
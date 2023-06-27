import { IBadges } from "../models/badges.model";

export class SubscribeToBadges {
    static readonly type = '[Badges] SubscribeToBadges';
    // constructor(){alert("IN SubscribeToBadges");}
}

export class SetBadges {
    static readonly type = '[Badges] SetBadges';
    constructor(public readonly badges: IBadges | null | undefined) { }
}
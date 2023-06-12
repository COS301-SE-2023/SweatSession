import { IPoints } from "../models/points.model";

export class SubscribeToPoints {
    static readonly type = '[Points] SubscribeToPoints';
    // constructor(){alert("IN SubscribeToPoints");}
}

export class SetPoints {
    static readonly type = '[Points] SetPoints';
    constructor(public readonly points: IPoints | null | undefined) { }
}
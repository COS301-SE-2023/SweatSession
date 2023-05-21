import { IAddWorkoutSchedule, IGetWorkoutSchedule, IRemoveWorkoutSchedule, IUpdateWorkoutSchedule } from "../models";

export class GetWorkoutSchedule {
    static readonly type = '[workoutSchedule] get workout schedule';
    constructor(payload: IGetWorkoutSchedule) {}
}

export class AddWorkoutSchedule {
    static readonly type = '[workoutSchedule] add workout schedule';
    constructor(payload: IAddWorkoutSchedule) {}
}

export class RemoveWorkoutSchedule {
    static readonly type = '[workoutSchedule] remove workout schedule';
    constructor(payload: IRemoveWorkoutSchedule) {}
}

export class UpdateWorkoutSchedule {
    static readonly type = '[workoutSchedule] add workout schedule';
    constructor(payload: IUpdateWorkoutSchedule) {}
}
import { IRemoveWorkoutSchedule,
        IUpdateWorkoutSchedule,
        IWorkoutScheduleModel } 
        from "../models";

export class GetWorkoutSchedules {
    static readonly type = '[workoutSchedule] get workout schedule';
    constructor(/*public payload: IGetWorkoutSchedules*/) {}
}

export class AddWorkoutSchedule {
    static readonly type = '[workoutSchedule] add workout schedule';
    constructor(public payload:  IWorkoutScheduleModel) {}
}

export class RemoveWorkoutSchedule {
    static readonly type = '[workoutSchedule] remove workout schedule';
    constructor(public payload: IRemoveWorkoutSchedule) {}
}

export class UpdateWorkoutSchedule {
    static readonly type = '[workoutSchedule] add workout schedule';
    constructor(public payload: IUpdateWorkoutSchedule) {}
}

export class LoadSchedule {
    static readonly type = "[workoutSchedule] load workout schedule";
    constructor(public payload: IWorkoutScheduleModel) {}
}
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
    constructor(public payload: IWorkoutScheduleModel) {}
}

export class UpdateWorkoutSchedule {
    static readonly type = '[workoutSchedule] update workout schedule';
    constructor(public payload: IWorkoutScheduleModel) {}
}

export class UpdateWorkoutAdded {
    static readonly type = '[Workout Scheduling] Update Workout Added';
    constructor(public payload: { id: string; workoutAdded: boolean }) {}
}

export class LoadSchedule {
    static readonly type = "[workoutSchedule] load workout schedule";
    constructor(public payload: IWorkoutScheduleModel) {}
}
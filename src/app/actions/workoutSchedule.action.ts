import {
    IAddSweatbuddies, IAddSweatbuddy,
    IRequestToAdd,
    IRequestToJoin,
    IWorkoutScheduleModel
} from "../models";

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

export class AddSweatBuddy {
    static readonly type = "[workoutSchedule] add sweat buddy to workout schedule";
    constructor(public payload: IAddSweatbuddy) {}
}

export class AddSweatBuddies {
    static readonly type = "[workoutSchedule] add sweat buddies to a schedule";
    constructor(public payload: IAddSweatbuddies) {}
}

export class RequestToJoinWorkout {
    static readonly type = "[workoutSchedule] request to join a workout session";
    constructor(public payload: IRequestToJoin) {}
}

export class SendAddRequest {
    static readonly type = "[workoutSchedule] request to add a user to a workout session";
    constructor(public payload: IRequestToAdd) {}
}
import { Time } from "@angular/common";
import { Timestamp } from "firebase/firestore";

export type STATUS = "completed" | "uncompleted" | "inSession";
export interface IWorkoutScheduleModel {
    id?: string;
    name?: string;
    location?: string;
    duration?: number;
    status?: STATUS;
    time?: Time;
    date?: Date;
    createdAt?: Timestamp;
    notifyAt?: Timestamp;
    notified?: boolean;
    completeAt?: Timestamp;
    workoutAdded?: boolean;
    joined?: boolean;
}

//request
export interface IGetWorkoutSchedules {
    userId: string;
}

export interface IAddWorkoutSchedule {
    userId: string;
    schedule: IWorkoutScheduleModel;
}

export interface IRemoveWorkoutSchedule {
    userId: string;
    schedule: IWorkoutScheduleModel;
}

export interface IUpdateWorkoutSchedule {
    userId: string;
    schedule: IWorkoutScheduleModel;
}

//response
export interface IGotWorkoutSchedules {
    userId: string;
    schedules: IWorkoutScheduleModel[];
}

export interface IAddedWorkoutSchedule {
    userId?: string;
    schedule?: IWorkoutScheduleModel;
    validate: boolean;
}

export interface IRemovedWorkoutSchedule {
    userId: string;
    schedules?: IWorkoutScheduleModel[];
    validate: boolean;
}

export interface IUpdatedWorkoutSchedule {
    userId: string;
    schedule?: IWorkoutScheduleModel;
    validate: boolean;
}
import { Time } from "@angular/common";

export interface IWorkoutScheduleModel {
    id: string;
    name:string;
    duration?: number;
    location?: string;
    date?: Date;
    time?: Time;
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
    userId: string;
    schedule: IWorkoutScheduleModel;
    validate: boolean;
}

export interface IRemovedWorkout {
    userId: string;
    validate: boolean;
}

export interface IUpdatedWorkoutSchedule {
    userId: string;
    schedule: IWorkoutScheduleModel;
    validate: true;
}
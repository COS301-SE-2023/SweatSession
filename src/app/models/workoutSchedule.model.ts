export interface IWorkoutScheduleModel {
    id: string;
    name:string;
}

//request
export interface IGetWorkoutSchedules {
    userId: string;
    schedule: IWorkoutScheduleModel[];
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
export interface IGotWorkoutSchedule {
    userId: string;
    schedule: IWorkoutScheduleModel;
}

export interface IAddedWorkoutSchedule {
    userId: string;
    validate: boolean;
}

export interface IRemovedWorkout {
    userId: string;
    validate: boolean;
}

export interface IUpdatedWorkoutSchedule {
    userId: string;
    validate: true;
}
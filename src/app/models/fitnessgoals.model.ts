import {IWorkoutScheduleModel} from "./workoutSchedule.model";


export interface IGOAL {
    id?: string;
    name?: string;
    description?: string;
    coverPicture?: string;
    start?: string;
    end?: string;
    progress?: number;
    days_left?: number;
    isCompleted?: boolean;
}

export interface IGOALS {
    goals?: IGOAL[];
}


export interface IAddGOAL {
    userId?: string;
    goal: IGOAL;
}

export interface IGotGOAL {
    goal: IGOAL;
}

export interface IAddedGoal {
    userId?: string;
    goal?: IGOAL;
    validate: boolean;
}


export interface IGOAL {
    id?: string;
    name?: string;
    description?: string;
    coverPicture?: string;
    startDate?: string;
    endDate?: string;
    progress?: number;
    days_left?: number;
    isCompleted?: boolean;
    duration?: number;
    Tasks?: ITASK [];
}

export interface IGOALS {
    goals?: IGOAL[];
    Tasks?: ITASK [];

}

export interface ITASK{
    id: string;
    content: string;
    done : boolean;
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
import { Timestamp } from "@angular/fire/firestore";
import { IScheduleRequest } from "./workoutSchedule.model";

export interface IProfileModel {
    userId?: string;
    name?: string;
    displayName?: string;
    email?: string;
    bio?: string;
    profileURL?: string;
    phoneNumber?: string;
    height?: string;
    weight?: string;
    points?: number;
    groupIds?: string[];
    friendRequests?: string[];
    sessionsCompleted?: number; 
    badgesNumber?: number;
    scheduleParticipationRequested?: IScheduleRequest[];
    receivedBadges?: Number[],
    gymsVisited?: string[]
}

//requests
export interface IUserModel {
    id: string;
    email?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    created?: Timestamp | null | undefined;
}

export interface IGetProfile {
    userId?: string;
}

export interface IUpdateProfile {
    userId: string;
    profile: IProfileModel;
}

//response
export interface IGotProfile {
    profile: IProfileModel;
}

export interface IUpdatedProfile {
    validate: boolean;
}

export interface IGroup {
    id?: string;
    displayName?: string;
    profileURL?: string;
    bio?: string;
    admin?: string[];
    lastChatid?: string;
    createBy?: string;
    members?: string[];
}
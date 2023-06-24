import { Timestamp } from "@angular/fire/firestore";

export interface IProfileModel {
    userId: string;
    name?: string;
    displayName?: string;
    email?: string;
    bio?: string;
    profileURL?: string;
    phoneNumber?: string;
    height?: string;
    weight?: string;
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
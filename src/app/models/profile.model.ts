import { Timestamp } from 'firebase-admin/firestore';

export interface IProfileModel {
    userId: string;
    name?: string;
    displayName?: string | null | undefined;
    email?: string;
    bio?: string;
    profileURL?: string;
    phoneNumber?: string;
    height?: Number;
    weight?: Number;
}

export interface IUserModel {
    id: string;
    email?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    created?: Timestamp | null | undefined;
}

//requests
export interface IGetProfile {
    userId: string;
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
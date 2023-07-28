import { Time } from "@angular/common";
import { Timestamp } from "firebase/firestore";


export interface LocationGymSession {
    friendDisplayName: string|undefined,
    startTime: Time,
    endTime: Timestamp,
    date: Date,
    profilePhoto: string|undefined,
    workoutName: string
}

export interface LocationGymSession2 {
    friendDisplayName: string|undefined,
    startTime: Time,
    endTime: Time,
    date: Date,
    profilePhoto: string|undefined
}

export interface ILocation {
    gymUsers: any[]
}
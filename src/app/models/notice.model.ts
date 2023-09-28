import { IRequestToAdd } from "./workoutSchedule.model";

export class Notice{
    id?: string;
    sentdate?: string;
    sendername?: string;
    message?: string;
    senttoid?: string;
    senderid?: string;
    profileurl?: string;
    scheduleRequest?: IRequestToAdd;
}

export class Profile{
    id?: string;
    name?: string;
    displayName?: string;
    email?: string;
    bio?: string;
    profileURL?: string;
}
import { IAddAmin, IEditGroup } from "../models";

export class StageGroup {
    static readonly type= "[Groups] stage a group in session storage";
    constructor(public groupId: string) {}
}

export class LoadGroupHompage {
    static readonly type = "[Groups] Load group from local storage";
}

export class RemoveGroup {
    static readonly type = '[Groups] remove group from local storage';
}

export class EditGroup {
    static readonly type = '[Groups] edit group profile';
    constructor(public payload: IEditGroup) {}
}

export class AddGroupAdmin {
    static readonly type = '[Groups] add group admin';
    constructor(public payload: IAddAmin) {}
}
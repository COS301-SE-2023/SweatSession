export class StageGroup {
    static readonly type= "[Groups] stage a group in session storage";
    constructor(public groupId: string) {console.log("[Groups] stage a group in session storage")}
}

export class LoadGroupHompage {
    static readonly type = "[Groups] Load group from local storage";
}

export class RemoveGroup {
    static readonly type = '[Groups] remove group from local storage';
}
import {IGOAL,IGOALS} from "../../models/fitnessgoals.model";

export class AddGoalAction {
    static readonly type = "[fitnessgoals] Add Goal";
    constructor(public payload:IGOAL){
        // alert('AddGoalAction in actions');
    }
}

export class RemoveGoalAction {
    static readonly type = "[fitnessgoals] Remove Goal";
    constructor(public payload:IGOAL){}
}

export class GetGoalsAction {
    static readonly type = "[fitnessgoals] Get Goals";
}

export class UpdateGoalAction {
    static readonly type = "[fitnessgoals] Update Goal";
    constructor(public payload:IGOAL){}
}


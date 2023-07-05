import { Injectable } from '@angular/core';
import { goalsRepository } from '../../repository';
import {IAddGOAL, IGOAL, IGOALS, ITASK} from 'src/app/models';
import {Selector} from "@ngxs/store";
import {map} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FitnessgoalService{

    constructor(private repository:goalsRepository) { }


    getGoals(userId: string | undefined) {
     return this.repository.getGoals(userId);
    }

    getGoal(goalid: string)
    {
        return this.repository.getGoal(goalid);
    }

    deleteTask(userId: string, goalid: string,taskid: string)
    {
        this.repository.deleteTask(userId,goalid,taskid);
    }
    updateTask(request : ITASK, userId: string)
    {
        this.repository.updateTask(request,userId);
    }
    
    addGoal(request: IAddGOAL){
        // alert('addGoal in Service');
        this.repository.addGoal(request);
    }

    addTask(request: ITASK, userId: string){
        // alert('addTask in Service');
        this.repository.addTask(request , userId);
    }

    saveTasks(userId: string,goalid: string, request: ITASK[]){

        this.repository.saveTasks(userId,goalid,request);
    }

    doneTask(userId: string, goalid: string, taskid: string, theTask: ITASK)
    {
        this.repository.doneTask(userId,goalid,taskid,theTask);
    }


    getTasks(userId: string | undefined, goalid: string | undefined) {
        return this.repository.getTasks(userId, goalid);
    }

    removeGoal(goalID: string)
    {
        this.repository.removeGoal(goalID);
    }

}
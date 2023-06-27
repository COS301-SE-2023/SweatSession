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

    deleteTask(userId: string, goalid: string,taskid: string)
    {
        this.repository.deleteTask(userId,goalid,taskid);
    }
     addGoal(request: IAddGOAL){
        alert('addGoal in Service');
        this.repository.addGoal(request);
    }

    addTask(request: ITASK, userId: string){
        alert('addTask in Service');
        this.repository.addTask(request , userId);
    }

    saveTasks(userId: string,goalid: string, request: ITASK[]){

        this.repository.saveTasks(userId,goalid,request);
    }



    getTasks(userId: string | undefined, goalid: string | undefined) {
        return this.repository.getTasks(userId, goalid);
    }

    removeGoal(userId: string, goalname: string)
    {
        this.repository.removeGoal(userId,goalname);
    }

}
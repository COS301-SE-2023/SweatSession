import { Injectable } from '@angular/core';
import { goalsRepository } from '../../repository';
import {IAddGOAL, IGOAL} from 'src/app/models';
import {Selector} from "@ngxs/store";

@Injectable({
    providedIn: 'root'
})
export class FitnessgoalService{

    constructor(private repository:goalsRepository) { }


    getGoals(userId: string) {
        return this.repository.getGoals(userId);
    }

     addGoal(request: IAddGOAL){
        alert('addGoal in Service');
        this.repository.addGoal(request);
    }

}
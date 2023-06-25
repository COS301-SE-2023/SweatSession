import { Injectable } from '@angular/core';
import { goalsRepository } from '../../repository';
import {IAddGOAL, IGOAL} from 'src/app/models';
import {Selector} from "@ngxs/store";

@Injectable({
    providedIn: 'root'
})
export class FitnessgoalService{

    constructor(private repository:goalsRepository) { }

    @Selector()
    async addGoal(request: IAddGOAL) : Promise<any>{
        alert('addGoal in Service');
        return this.repository.addGoal(request);

    }

}
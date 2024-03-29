import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from "@ngxs/store";
import { AddGoalAction } from "src/app/actions";
import { IGOAL } from 'src/app/models';
import { FitnessgoalService } from 'src/app/services';
import { AuthApi } from '../auth/auth.api';

export interface FitnessgoalStateModel {
    fitnessgoal: IGOAL[],
    validate: boolean;
    goal: IGOAL | null;

}

@State<FitnessgoalStateModel>({
    name: "fitnessgoal",
    defaults: {
        fitnessgoal: [],
        validate: false,
        goal: null

    }
})

@Injectable()
export class FitnessgoalState {
    constructor(
        private readonly store: Store,
        private readonly fitnessgoalService: FitnessgoalService,
        private readonly authApi: AuthApi
    ) {
    }


    @Action(AddGoalAction)
    async addGoal(ctx: StateContext<FitnessgoalStateModel>, { payload }: AddGoalAction) {
        // alert('addGoal in State');
        // const currentUserId = await this.authApi.getCurrentUserId();
        //
        // if(currentUserId!=null) {
        //     const request: IAddGOAL = {
        //         userId: currentUserId,
        //         goal: payload
        //     }
        //
        //     const response = await this.fitnessgoalService.addGoal(request);
        //     ctx.patchState({
        //         fitnessgoal: response.goal!, ...ctx.getState().fitnessgoal
        //     })
        //     return ctx.dispatch(new Navigate(['fitnessgoal']));
        // }else {
        //     alert('Please Login to add Goal');
        //     return ctx.dispatch(new Navigate(['login']));
        // }
        //
        //
        //
        }

}
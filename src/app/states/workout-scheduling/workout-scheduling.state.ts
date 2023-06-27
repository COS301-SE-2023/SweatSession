import { LoadSchedule } from './../../actions/workoutSchedule.action';
import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { AddWorkoutSchedule, 
        GetWorkoutSchedules,
        UpdateWorkoutAdded,
        RemoveWorkoutSchedule,
        UpdateWorkoutSchedule } 
        from "src/app/actions";
import { IAddWorkoutSchedule, 
        IAddedWorkoutSchedule,
        IGetWorkoutSchedules,
        IGotWorkoutSchedules,
        IRemoveWorkoutSchedule,
        IRemovedWorkoutSchedule,
        IUpdateWorkoutSchedule,
        IUpdatedWorkoutSchedule,
        IWorkoutScheduleModel } 
        from "src/app/models";
import { NavigationService, WorkoutscheduleService } from "src/app/services";
import { time } from "console";
import { AuthApi } from '../auth/auth.api';
import { catchError, of, tap } from 'rxjs';

export interface WorkoutSchedulingStateModel {
    schedules: IWorkoutScheduleModel[];
    validate: boolean;
    schedule: IWorkoutScheduleModel | null;
}

@State<WorkoutSchedulingStateModel>({
    name: "WorkoutSchedule",
    defaults: {
        schedules: [],
        validate: false,
        schedule: null
    }
})

@Injectable({
    providedIn: 'root'
})
export class WorkoutSchedulingState {
    constructor(
        private readonly service: WorkoutscheduleService,
        private readonly store: Store,
        private readonly authApi: AuthApi,
        private readonly navigation: NavigationService
    ){}

    @Action(UpdateWorkoutAdded)
  updateWorkoutAdded(ctx: StateContext<IWorkoutScheduleModel[]>, action: UpdateWorkoutAdded) {
    const state = ctx.getState();
    const index = state.findIndex((schedule) => schedule.id === action.payload.id);
    if (index !== -1) {
      const updatedSchedule = { ...state[index], workoutAdded: action.payload.workoutAdded };
      ctx.setState([...state.slice(0, index), updatedSchedule, ...state.slice(index + 1)]);
    }
  }

    @Action(GetWorkoutSchedules)
    async getWorkoutSchedules(ctx: StateContext<WorkoutSchedulingStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
       if(currentUserId!=null) {
            const request:IGetWorkoutSchedules={
                userId: currentUserId
            }

        return (await this.service.getSchedules(request)).pipe(
            tap((response: IGotWorkoutSchedules)=>{
                ctx.setState({
                    ...ctx.getState(), schedules: response.schedules
                })
            }),
            catchError((error) => {
                ctx.setState({
                    ...ctx.getState(),schedules: []
                })
                return of(error);
            }))
        }else {
            return ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Action(RemoveWorkoutSchedule)
    async removeWorkoutSchedule(ctx: StateContext<WorkoutSchedulingStateModel>,{payload}: RemoveWorkoutSchedule) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            const request: IRemoveWorkoutSchedule = {
                userId: currentUserId,
                schedule: payload
            }
            const response: IRemovedWorkoutSchedule = await this.service.removeSchedule(request);
            if(response.validate){
                const schedules = ctx.getState().schedules.filter((schedule)=>{
                    if(schedule.id! === request.schedule.id!)
                        return false;
                    else
                        return true;
                })
                ctx.patchState({
                    schedules: schedules
                })
            }else {
                alert("Sorry, You are no logged in");
                ctx.dispatch(new Navigate(['login']));
            }
        }
    }

    @Action(AddWorkoutSchedule)
    async addWorkoutSchedule(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: AddWorkoutSchedule) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            const request: IAddWorkoutSchedule ={
                userId: currentUserId,
                schedule: payload
            }
            const response = await this.service.addSchedule(request);
            ctx.patchState({
                schedules: [response.schedule!,...ctx.getState().schedules]
            })
            this.navigation.back();
        }else {
            alert("Sorry, You are no logged in");
            ctx.dispatch(new Navigate(['login']));
        }
    }

    @Action(UpdateWorkoutSchedule)
    async updateWorkoutSchedule(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: UpdateWorkoutSchedule) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            const request: IUpdateWorkoutSchedule={
                userId: currentUserId,
                schedule: payload
            }
            const response =await this.service.updateSchedule(request);
            ctx.patchState({
                schedules: [response.schedule!,...ctx.getState().schedules]
            })
        }else {
            alert("failed to update");
        }
    }

    @Action(LoadSchedule)
    async loadSchedule(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: LoadSchedule) {
        ctx.setState({
            ...ctx.getState(), schedule: payload
        })
    }

    @Selector()
    static returnSchedules(state: WorkoutSchedulingStateModel){
        return state.schedules;
    }

    @Selector()
    static returnSchedule(state: WorkoutSchedulingStateModel) {
        return state.schedule;
    }
}
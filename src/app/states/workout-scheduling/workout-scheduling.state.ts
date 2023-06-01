import { LoadSchedule } from './../../actions/workoutSchedule.action';
import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
//import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { AddWorkoutSchedule, 
        GetWorkoutSchedules,
        RemoveWorkoutSchedule,
        UpdateWorkoutSchedule } 
        from "src/app/actions";
import { IAddWorkoutSchedule, 
        IAddedWorkoutSchedule,
        IGetWorkoutSchedules,
        IGotWorkoutSchedules,
        IRemoveWorkoutSchedule,
        IWorkoutScheduleModel } 
        from "src/app/models";
import { WorkoutscheduleService } from "src/app/services";
import { time } from "console";

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
        private readonly store: Store
    ){}

    @Action(GetWorkoutSchedules)
    async getWorkoutSchedules(ctx: StateContext<WorkoutSchedulingStateModel>) {
        const request:IGetWorkoutSchedules={
            userId:"test id"
        }

       const response: IGotWorkoutSchedules = /*this.getMock(request)*/await this.service.getSchedules(request);
       console.table(response);
        ctx.setState({
            ...ctx.getState(), schedules: response.schedules
        })
    }

    @Action(RemoveWorkoutSchedule)
    async removeWorkoutSchedule(ctx: StateContext<WorkoutSchedulingStateModel>,{payload}: RemoveWorkoutSchedule) {
        // request: IRemoveWorkoutSchedule = {
        //     userId: "test id";
        //     schedule: payload;
        // }
        // response: IRemoveWorkoutSchedule = await this.service.removeSchedule(request);
        // remove workoutschedule
    }

    @Action(AddWorkoutSchedule)
    async addWorkoutSchedule(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: AddWorkoutSchedule) {
        const request: IAddWorkoutSchedule ={
            userId: "test id",
            schedule: payload
        }
        const response: IAddedWorkoutSchedule ={
            userId: "test id",
            schedule: payload,
            validate: true
        }//await this.service.addSchedule(request);
        ctx.patchState({
            schedules: [response.schedule!,...ctx.getState().schedules]
        })
    }

     @Action(UpdateWorkoutSchedule)
    async updateWorkoutSchedule(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: UpdateWorkoutSchedule) {
        //update state....
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
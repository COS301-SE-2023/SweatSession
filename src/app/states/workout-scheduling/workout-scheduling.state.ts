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
    schedule: IWorkoutScheduleModel;
}

@State<WorkoutSchedulingStateModel>({
    name: "WorkoutSchedule",
    defaults: {
        schedules: [],
        validate: false,
        schedule: null
    }
})

@Injectable()
export class WorkoutSchedulingState {
    constructor(
        private readonly service: WorkoutscheduleService,
        private readonly store: Store
    ){}

    @Action(GetWorkoutSchedules)
    async getWorkoutSchedules(ctx: StateContext) {
        const request:IGetWorkoutSchedules={
            userId:"test id"
        }

       const response: IGotWorkoutSchedules =  this.getMock(request)//await this.service.getSchedules(request);
        ctx.setState({
            ...ctx.getState(), schedules: response.schedules
        })
    }

    @Action(RemoveWorkoutSchedule)
    async removeWorkoutSchedule(ctx: StateContext,{payload}: RemoveWorkoutSchedule) {
        // request: IRemoveWorkoutSchedule = {
        //     userId: "test id";
        //     schedule: payload;
        // }
        // response: IRemoveWorkoutSchedule = await this.service.removeSchedule(request);
        // remove workoutschedule
    }

    @Action(AddWorkoutSchedule)
    async addWorkoutSchedule(ctx: StateContext, {payload}: AddWorkoutSchedule) {
        const request: IAddWorkoutSchedule =payload;
        const response: IAddedWorkoutSchedule ={
            userId: payload.userId,
            schedule: payload.schedule,
            validate: true
        }//await this.service.addSchedule(request);
        ctx.setState({
            ...ctx.getstate(),schedule:[response.schedule,ctx.getstate().schedules] //,validate: true
        })
    }

     @Action(UpdateWorkoutSchedule)
    async updateWorkoutSchedule(ctx: StateContext, {payload}: UpdateWorkoutSchedule) {
        //update state....
    }

    @Action(LoadSchedule)
    async loadSchedule(ctx: StateContext, {payload}: LoadSchedule) {
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

    getMock(request:IGetWorkoutSchedules){
        const results:IGotWorkoutSchedules = {
            userId: request.userId,
            schedules: [
                {
                    id: "ID 1",
                    name:"Schedule 1",
                    duration: 1,
                    location: "zone fitness, menlyn",
                    date: new Date(),
                },
                {
                    id: "ID 2",
                    name:"Schedule 2",
                    duration: 1,
                    location: "zone fitness, menlyn",
                    date: new Date(),
                },
                {
                    id: "ID 3",
                    name:"Schedule 3",
                    duration: 1,
                    location: "zone fitness, menlyn",
                    date: new Date(),
                },
                {
                    id: "ID 4",
                    name:"Schedule 4",
                    duration: 1,
                    location: "zone fitness, menlyn",
                    date: new Date(),
                },
                {
                    id: "ID 5",
                    name:"Schedule 5",
                    duration: 1,
                    location: "zone fitness, menlyn",
                    date: new Date(),
                },
                {
                    id: "ID 6",
                    name:"Schedule 6",
                    duration: 1,
                    location: "zone fitness, menlyn",
                    date: new Date(),
                }
            ]
        }
        return results;
    }
}
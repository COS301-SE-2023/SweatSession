import { LoadSchedule, AddSweatBuddies, AddSweatBuddy, RequestToJoinWorkout, SendAddRequest } from 'src/app/actions';
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
import { IAddSweatbuddy, IAddWorkoutSchedule, 
        IAddedWorkoutSchedule,
        IGetWorkoutSchedules,
        IGotWorkoutSchedules,
        IRemoveWorkoutSchedule,
        IRemovedWorkoutSchedule,
        IRequestToAdd,
        IUpdateWorkoutSchedule,
        IUpdatedWorkoutSchedule,
        IWorkoutScheduleModel } 
        from "src/app/models";
import { NavigationService, WorkoutscheduleService } from "src/app/services";
import { time } from "console";
import { AuthApi } from '../auth/auth.api';
import { catchError, of, tap } from 'rxjs';
import { forEach } from 'cypress/types/lodash';
import { NoticeService } from 'src/app/services/notifications/notice.service';

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
        private readonly navigation: NavigationService,
        private readonly notification: NoticeService
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
                /////
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

    @Action(AddSweatBuddies)
    async addSweatBuddies(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: AddSweatBuddies) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            payload.userIds.forEach(async (userId)=> {
                const request: IRequestToAdd = {
                    senderId: currentUserId,
                    receiverId: userId,
                    scheduleId: payload.scheduleId
                };
                this.service.addSweatBuddies(payload);
                this.store.dispatch(new SendAddRequest(request));
            })
        }
    }

    @Action(AddSweatBuddy)
    async addSweatBuddy(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: AddSweatBuddy) {
        this.service.addSweatBuddy(payload);
        this.store.dispatch(new Navigate(['workout-scheduling']));
    }

    @Action(RequestToJoinWorkout)
    async requestToJoinWorkout(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: RequestToJoinWorkout) {

    }

    @Action(SendAddRequest)
    async sendAddRequest(ctx: StateContext<WorkoutSchedulingStateModel>, {payload}: SendAddRequest) {
        this.service.sendAddRequest(payload);
        this.notification.requestToJoinWorkout(payload);
        console.table(payload);
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
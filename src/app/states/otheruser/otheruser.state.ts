import { AuthApi } from 'src/app/states/auth/auth.api';
import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { IFriendsModel, IGetFriends, IGetWorkoutSchedules, IGotFriends, IGotWorkoutSchedules, IProfileModel, IWorkoutScheduleModel } from "src/app/models";
import { GetOtheruserFriends, GetOtheruserSchedules, LoadOtherUserProfile, RemoveUser, StageOtheruserInfo } from "src/app/actions";
import { NavController } from "@ionic/angular";
import { FriendsService, OtheruserService,  WorkoutscheduleService } from "src/app/services";
import { WorkoutscheduleRepository } from "src/app/repository";
import { GetUsersAction } from 'src/app/actions/profile.action';
import { catchError, of, tap } from 'rxjs';
import { NavigationService } from 'src/app/services';

export interface OtherUserStateModel {
    otheruser: IProfileModel | IFriendsModel | null;
    friendshipStatus: boolean;
    friends: IFriendsModel[];
    workoutSchedules: IWorkoutScheduleModel[];
    profiles?: IProfileModel[];
}


@State<OtherUserStateModel>({
    name: "otheruser",
    defaults: {
        otheruser:null,
        friendshipStatus: false,
        friends: [],
        workoutSchedules: [],
        profiles: []
    },
})

@Injectable()
export class OtheruserState {
    request:any;
    constructor(private nav:NavController, 
        private readonly friendService: FriendsService, 
        private readonly workoutScheduleService: WorkoutscheduleService,
        private readonly otheruserService: OtheruserService,
        private readonly authApi: AuthApi,
        private readonly store: Store,
        private readonly navigation: NavigationService) {}
        

    @Action(StageOtheruserInfo)
    async stageOtheruserInfo(ctx: StateContext<OtherUserStateModel>, {payload}: StageOtheruserInfo) {
        ctx.patchState({
            otheruser: payload
        })
        sessionStorage.setItem("otheruser",JSON.stringify(payload));
       return ctx.dispatch(new Navigate(['otheruser']));
    }

    @Action(LoadOtherUserProfile)
    async loadOtheruserProfile(ctx: StateContext<OtherUserStateModel>) {
        this.request = await JSON.parse(sessionStorage.getItem("otheruser")!);
      if(this.request){
        return (await this.otheruserService.getProfile({userId:this.request.userId})).pipe(
            tap((response)=> {
                ctx.patchState({
                    otheruser: response,
                })
                return ctx.dispatch(new GetOtheruserFriends());
            })
           );
      }else{
        return ctx.dispatch(new Navigate(["home"]));
      }
    }

    @Action(GetOtheruserFriends)
    async getFriends(ctx: StateContext<OtherUserStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        return (await this.friendService.getFriends(this.request)).pipe(
            tap((response) => {
                ctx.patchState({
                   friends: response.friends,
                   friendshipStatus: response.friends.some(({userId})=> userId == currentUserId)
                })
            }),
            catchError((error) => {
                ctx.patchState({
                    friends: []

                })
                return of(error)
            })
        )
    }

    @Action(GetOtheruserSchedules)
    async getWorkoutSchedules(ctx: StateContext<OtherUserStateModel>) {
        this.request = await JSON.parse(sessionStorage.getItem("otheruser")!);
        return (await this.workoutScheduleService.getSchedules(this.request)).pipe(
            tap((response)=>{
                ctx.patchState({
                    workoutSchedules: response.schedules
                })
            }),
            catchError((error) => {
                ctx.patchState({
                    workoutSchedules: []
                })
                return of(error);
            })
        )
    }



    @Action(RemoveUser)
    async removeUser() {
        sessionStorage.removeItem("otheruser");
        this.navigation.back();
    }

    @Action(GetUsersAction)
    async getProfiles(ctx: StateContext<OtherUserStateModel>) {
      return (await this.otheruserService.getProfiles()).pipe(
        tap((response)=>{
            ctx.setState({
                ...ctx.getState(),
                profiles: response
              })
        })
      );
    }

    @Selector()
    static returnOtherUserProfile(state: OtherUserStateModel) {
        return state.otheruser;
    }

    @Selector()
    static returnOtherUserFriends(state: OtherUserStateModel) {
        return state.friends;
    }

    @Selector()
    static returnOtherUserSchedules(state: OtherUserStateModel) {
        return state.workoutSchedules;
    }

    @Selector()
    static returnProfiles(state: OtherUserStateModel){
      return state.profiles;
    }

    @Selector()
    static returnFriendshipStatus(state: OtherUserStateModel){
      return state.friendshipStatus;
    }
}
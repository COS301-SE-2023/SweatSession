import { AuthApi } from 'src/app/states/auth/auth.api';
import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { IFriendsModel, 
    IProfileModel, 
    IWorkoutScheduleModel } from "src/app/models";
import { CheckIFSendFriendRequest, 
    GetOtheruserFriends, 
    GetOtheruserProfile, 
    GetOtheruserSchedules, 
    LoadOtherUserProfile, 
    RemoveUser, 
    StageOtheruserInfo } from "src/app/actions";
import { NavController } from "@ionic/angular";
import { FriendsService, 
    OtheruserService,  
    WorkoutscheduleService } from "src/app/services";
import { GetUsersAction } from 'src/app/actions/profile.action';
import { catchError, of, tap } from 'rxjs';
import { NavigationService } from 'src/app/services';

export interface OtherUserStateModel {
    otheruser: IProfileModel | IFriendsModel | null;
    friendshipStatus: boolean;
    friends: IFriendsModel[];
    workoutSchedules: IWorkoutScheduleModel[];
    profiles?: IProfileModel[];
    requested?: boolean;
}


@State<OtherUserStateModel>({
    name: "otheruser",
    defaults: {
        otheruser:null,
        friendshipStatus: false,
        friends: [],
        workoutSchedules: [],
        profiles: [],
        requested: false
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
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId) {
           if(payload.userId !== currentUserId) {
            ctx.patchState({
                otheruser: payload
            })

            if(sessionStorage.getItem("otheruser")) {
                let otheruserIds: string[] = await JSON.parse(sessionStorage.getItem("otheruser")!);
                otheruserIds.push(payload.userId!);
                sessionStorage.setItem("otheruser",JSON.stringify(otheruserIds));
            }else {
                let otheruserIds: string[] = [];
                otheruserIds.push(payload.userId!);
                sessionStorage.setItem("otheruser",JSON.stringify(otheruserIds));
            }
            // sessionStorage.setItem("otheruser",JSON.stringify(payload.userId));
            ctx.dispatch(new Navigate(['otheruser']));
           }else {
            ctx.dispatch(new Navigate(['userprofile']));
           }
        }
    }

    @Action(LoadOtherUserProfile)
    async loadOtheruserProfile(ctx: StateContext<OtherUserStateModel>) {
        this.request = await JSON.parse(sessionStorage.getItem("otheruser")!);
      if(this.request.length > 0){
        return (await this.otheruserService.getProfile({userId:this.request[this.request.length-1]})).pipe(
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

    @Action(GetOtheruserProfile)
    async getOtheruserProfile(ctx: StateContext<OtherUserStateModel>, {payload}: GetOtheruserProfile) {

        return (await this.otheruserService.getProfile(payload)).pipe(
            tap((response)=> {
                ctx.patchState({
                    otheruser: response,
                })
            })
        );
    }

    @Action(GetOtheruserFriends)
    async getFriends(ctx: StateContext<OtherUserStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        this.request = await JSON.parse(sessionStorage.getItem("otheruser")!);
        if(this.request.length > 0) {
            return (await this.friendService.getFriends({userId: this.request[this.request.length-1]})).pipe(
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
        }else {
            return ctx.dispatch(new Navigate(["home"]));
        }
    }

    @Action(GetOtheruserSchedules)
    async getWorkoutSchedules(ctx: StateContext<OtherUserStateModel>) {
        this.request = await JSON.parse(sessionStorage.getItem("otheruser")!);
        return (await this.workoutScheduleService.getSchedules({userId: this.request[this.request.length-1]})).pipe(
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
        this.request = await JSON.parse(sessionStorage.getItem("otheruser")!);
        if(this.request.length > 0) {
            this.request.pop();
            sessionStorage.setItem("otheruser", JSON.stringify(this.request));
        }

        if(this.request.length == 0) {
            sessionStorage.removeItem("otheruser");
        }
        sessionStorage.removeItem("otherUserBadgesName");
        sessionStorage.removeItem("otherUserBadgesId");
        // this.navigation.back();
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

    @Action(CheckIFSendFriendRequest)
    async ifRequested(ctx: StateContext<OtherUserStateModel>,) {
        const currentUser = await this.authApi.getCurrentUserId();
        const OtherUserId = await JSON.parse(sessionStorage.getItem("otheruser")!);
        return (await this.otheruserService.getProfile({userId: currentUser})).pipe(
            tap((response)=> {
                ctx.patchState({
                    requested: response.friendRequests?.includes(OtherUserId)
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

    @Selector()
    static returnFriendRequestStatus(state: OtherUserStateModel){
      return state.requested;
    }
}
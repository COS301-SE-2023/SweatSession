import { AuthApi } from 'src/app/states/auth/auth.api';
import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { IFriendsModel, IGetFriends, IGetWorkoutSchedules, IGotFriends, IGotWorkoutSchedules, IProfileModel, IWorkoutScheduleModel } from "src/app/models";
import { LoadOtherUserProfile, StageOtheruserInfo } from "src/app/actions";
import { NavController } from "@ionic/angular";
import { FriendsService } from "src/app/services";
import { WorkoutscheduleRepository } from "src/app/repository";

export interface OtherUserStateModel {
    otheruser: IProfileModel | IFriendsModel | null;
    friendshipStatus: boolean;
    friends: IFriendsModel[];
    workoutSchedule: IWorkoutScheduleModel[];
}


@State<OtherUserStateModel>({
    name: "otheruser",
    defaults: {
        otheruser:null,
        friendshipStatus: true,
        friends: [],
        workoutSchedule: []
    },
})

@Injectable()
export class OtheruserState {
    constructor(private nav:NavController, 
        private readonly friendService: FriendsService, 
        private readonly workoutScheduleService: WorkoutscheduleRepository,
        private readonly authApi:AuthApi) {}

    @Action(StageOtheruserInfo)
    async stageOtheruserInfo(ctx: StateContext<OtherUserStateModel>, {payload}: StageOtheruserInfo) {
        const state = ctx.getState();
        ctx.setState({
            ...state, otheruser: payload
        })
        localStorage.setItem("user",JSON.stringify(payload));
        //this.nav.navigateRoot("otheruser");
       return ctx.dispatch(new Navigate(['otheruser']));
    }

    @Action(LoadOtherUserProfile)
    async loadOtheruserProfile(ctx: StateContext<OtherUserStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            const request = JSON.parse(localStorage.getItem("user")!);
            const schedulesResponse = this.getSchedules(request); //this.workoutScheduleService.getSchedules(request)
            const friendsResponse = this.getFriends(request); //this.friendService.getFriends(request);
            //const response = await this.otheruserService.getProfile();

            const state = ctx.getState();
            ctx.setState({
                ...state, otheruser: this.getMock(request) as IProfileModel,
                friends: this.getFriends(request).friends,
                workoutSchedule: this.getSchedules(request).schedules,
                friendshipStatus: this.getFriends(request).friends.some(({userId})=> userId == currentUserId)
            })
        }
    }

    @Selector()
    static getOtherUser(state: OtherUserStateModel) {
        return state;
    }

    getMock(request:IFriendsModel) {
        const profile: IProfileModel = {
            userId: request.userId!,
            name: request.name,
            profileURL: request.profileURL,
            bio: "hello life",
        }

        if(request.userId=="friend 2")
            profile.bio = "whats up..."
        else if(request.userId=="friend 3")
            profile.bio = "life of getter...."
        return profile;
    }

    getSchedules(request:IGetWorkoutSchedules){
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

    getFriends(request: IGetFriends) : IGotFriends{
        const results : IGotFriends = {
            userId: request.userId,
            friends: [
                {
                    userId: "userId 1",
                    name: "Testing 1",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                },
                {
                    userId: "userId 2",
                    name: "Testing 2",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                },
                {
                    userId: "userId 3",
                    name: "Testing 3",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                },
                {
                    userId: "userId 4",
                    name: "Testing 4",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                },
                {
                    userId: "userId 5",
                    name: "Testing 5",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                },
                {
                    userId: "userId 6",
                    name: "Testing 6",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                },
                {
                    userId: "userId 7",
                    name: "Testing 7",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                },
                {
                    userId: "test id",
                    name: "Testing 8",
                    profileURL: "assets/sweatsessionlogotransparent1.png"
                }
            ],
            validate: true
        }
        return results;
    }
}
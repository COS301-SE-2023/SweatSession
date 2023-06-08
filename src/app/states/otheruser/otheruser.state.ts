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
    constructor(private friendService: FriendsService, private workoutScheduleService: WorkoutscheduleRepository) {}

    @Action(StageOtheruserInfo)
    stageOtheruserInfo(ctx: StateContext<OtherUserStateModel>, {payload}: StageOtheruserInfo) {
        const state = ctx.getState();
        ctx.setState({
            ...state, otheruser: payload
        })
        localStorage.setItem("user",JSON.stringify(payload));
       return ctx.dispatch(new Navigate(['otheruser']));
    }

    @Action(LoadOtherUserProfile)
    loadOtheruserProfile(ctx: StateContext<OtherUserStateModel>) {
        const request = JSON.parse(localStorage.getItem("user")!);
        const schedulesResponse = this.getSchedules(request);
        const friendsResponse = this.getFriends(request);
        //const response = await this.otheruserService.getProfile();

        const state = ctx.getState();
        ctx.setState({
            ...state, otheruser: this.getMock(request) as IProfileModel,
            friends: this.getFriends(request).friends,
            workoutSchedule: this.getSchedules(request).schedules,
            friendshipStatus: this.getFriends(request).friends.some(({userId})=> userId = "test id")
        })
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
                    profileURL: ""
                },
                {
                    userId: "userId 2",
                    name: "Testing 2",
                    profileURL: ""
                },
                {
                    userId: "userId 3",
                    name: "Testing 3",
                    profileURL: ""
                },
                {
                    userId: "userId 4",
                    name: "Testing 4",
                    profileURL: ""
                },
                {
                    userId: "userId 5",
                    name: "Testing 5",
                    profileURL: ""
                },
                {
                    userId: "userId 6",
                    name: "Testing 6",
                    profileURL: ""
                },
                {
                    userId: "userId 7",
                    name: "Testing 7",
                    profileURL: ""
                },
                {
                    userId: "test id",
                    name: "Testing 8",
                    profileURL: ""
                }
            ],
            validate: true
        }
        return results;
    }
}
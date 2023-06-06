import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { IFriendsModel, IProfileModel } from "src/app/models";
import { LoadOtherUserProfile, StageOtheruserInfo } from "src/app/actions";
import { NavController } from "@ionic/angular";

export interface OtherUserStateModel {
    otheruser: IProfileModel | IFriendsModel | null;
}


@State<OtherUserStateModel>({
    name: "otheruser",
    defaults: {
        otheruser:null
    },
})

@Injectable()
export class OtheruserState {
    constructor() {}

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
        const state = ctx.getState();
        //const request = await this.otheruserService.getProfile();
        ctx.setState({
            ...state, otheruser: this.getMock(JSON.parse(localStorage.getItem("user")!))
        })
    }

    @Selector()
    static getOtherUser(state: OtherUserStateModel) {
        return state.otheruser;
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
        else if(request.userId=="freinds 3")
            profile.bio = "life of getter...."
        return profile;
    }
}
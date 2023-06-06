import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
//import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { IFriendsModel, IProfileModel } from "src/app/models";
import { LoadOtherUserProfile, StageOtheruserInfo } from "src/app/actions";

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
    }

    @Action(LoadOtherUserProfile)
    loadOtheruserProfile(ctx: StateContext<OtherUserStateModel>) {
        const state = ctx.getState();
        //const request = await this.otheruserService.getProfile();
    }

    @Selector()
    static getOtherUser(state: OtherUserStateModel) {
        return state.otheruser;
    }
}
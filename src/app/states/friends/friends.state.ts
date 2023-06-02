import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
//import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { FriendsService } from "src/app/services";
import { AddFriendAction, GetFriendsAction, RemoveFriendAction } from "src/app/actions";
import { IAddFriend, IAddedFriend, IFriendsModel, IGetFriends, IGotFriends } from "src/app/models";

export interface FriendsStateModel {
    friends: IFriendsModel[];
}

@State<FriendsStateModel>({
    name: "friends",
    defaults: {
        friends: []
    }
})

@Injectable()
export class FriendsState {
    constructor(
        private readonly friendsService: FriendsService,
        private readonly store: Store
    ){}

    @Action(GetFriendsAction)
    async getFriends(ctx: StateContext<FriendsStateModel>) {
        const request:IGetFriends={
            userId:"test id"
        }

        const response: IGotFriends = await this.friendsService.getFriends(request);
        ctx.patchState({
            ...ctx.getState(), friends: response.friends
        })
    }

    @Action(RemoveFriendAction)
    async removeFriends(ctx: StateContext<FriendsStateModel>,{payload}: RemoveFriendAction) {
        //remove friend
    }

    @Action(AddFriendAction)
    async addFriend(ctx: StateContext<FriendsStateModel>, {payload}: AddFriendAction) {
        const request:IAddFriend=payload;

        const response: IAddedFriend = await this.friendsService.getFriends(request);
        ctx.setState({
            friends:[response.friend!,...ctx.getState().friends]
        })
    }

    @Selector()
    static returnFriends(state: FriendsStateModel){
        return state.friends;
    }
}
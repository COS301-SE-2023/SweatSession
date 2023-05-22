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

        const response: IGotFriends = this.getMock() //await this.friendsService.getFriends(request);
        ctx.setState({
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

        const response: IAddedFriend = {
            validate: true,
            friend: payload.friend
        }//await this.friendsService.getFriends(request);
        ctx.patchState({
            friends:[response.friend]
        })
    }

    @Selector()
    static returnFriends(state: FriendsStateModel){
        return state.friends;
    }

    getMock() : IGotFriends{
        const results : IGotFriends = {
            friends: [
                {
                    id: "id 1",
                    name: "Testing 1",
                    profileUrl: ""
                },
                {
                    id: "id 2",
                    name: "Testing 2",
                    profileUrl: ""
                },
                {
                    id: "id 3",
                    name: "Testing 3",
                    profileUrl: ""
                },
                {
                    id: "id 4",
                    name: "Testing 4",
                    profileUrl: ""
                },
                {
                    id: "id 5",
                    name: "Testing 5",
                    profileUrl: ""
                },
                {
                    id: "id 6",
                    name: "Testing 6",
                    profileUrl: ""
                },
                {
                    id: "id 7",
                    name: "Testing 7",
                    profileUrl: ""
                },
                {
                    id: "id 8",
                    name: "Testing 8",
                    profileUrl: ""
                }
            ]
        }
        return results;
    }
}
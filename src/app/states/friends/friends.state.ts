import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
//import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { FriendsService } from "src/app/services";
import { AddFriendAction, GetFriendsAction, RemoveFriendAction } from "src/app/actions";
import { IAddFriend, IAddedFriend, IFriendsModel, IGetFriends, IGotFriends, IRemoveFriend } from "src/app/models";

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

        const response: IGotFriends = this.getMock(request)//await this.friendsService.getFriends(request);
        ctx.patchState({
            ...ctx.getState(), friends: response.friends
        })
    }

    @Action(RemoveFriendAction)
    async removeFriends(ctx: StateContext<FriendsStateModel>,{payload}: RemoveFriendAction) {
        const request:IRemoveFriend={
            userId:"testId",
            friend: payload
        }

        //const response = await this.friendsService.removeFriend(request);
        if(true/*response.validate*/){
            const friends = ctx.getState().friends.filter((schedule)=>{
                if(schedule.userId! === request.friend.userId!)
                    return false;
                else
                    return true;
            })
            ctx.patchState({
                friends: friends
            })
        }
    }

    @Action(AddFriendAction)
    async addFriend(ctx: StateContext<FriendsStateModel>, {payload}: AddFriendAction) {
        const request:IAddFriend={
            userId:"testId",
            friend: payload
        }
        const response: IAddedFriend = await this.friendsService.getFriends(request);
        ctx.setState({
            friends:[response.friend!,...ctx.getState().friends]
        })
    }

    @Selector()
    static returnFriends(state: FriendsStateModel){
        return state.friends;
    }

    getMock(request:IGetFriends){
      let friends: IGotFriends = {
            userId: request.userId,
            friends:[{
                userId: "friend 1",
                name: "John",
                profileURL: "assets/sweatsessionlogotransparent1.png" ,
            },
            {
                userId: "friend 2",
                name: "Johnny",
                profileURL: "assets/sweatsessionlogotransparent1.png" ,
            },
            {
                userId: "friend 3",
                name: "Themba",
                profileURL: "assets/sweatsessionlogotransparent1.png" ,
            }],
            validate: true,
        }

        return friends;
    }
}
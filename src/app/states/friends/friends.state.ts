import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { FriendsService } from "src/app/services";
import { AddFriendAction, GetFriendsAction, RemoveFriendAction } from "src/app/actions";
import { IAddFriend, IAddedFriend, IFriendsModel, IGetFriends, IGotFriends, IRemoveFriend } from "src/app/models";
import { AuthApi } from '../auth/auth.api';

export interface FriendsStateModel {
    friends: IFriendsModel[];
}

@State<FriendsStateModel>({
    name: "friends",
    defaults: {
        friends: []
    }
})

@Injectable({
    providedIn: 'root'
})
export class FriendsState {
    constructor(
        private readonly friendsService: FriendsService,
        private readonly store: Store,
        private readonly authApi: AuthApi,
    ){}

    @Action(GetFriendsAction)
    async getFriends(ctx: StateContext<FriendsStateModel>) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            const request:IGetFriends={
                userId: currentUserId
            }

            const response: IGotFriends = await this.friendsService.getFriends(request);
            ctx.setState({
                ...ctx.getState(), friends: response.friends
            })
        }else {
            alert("Sorry, You are no logged in");
            ctx.dispatch(new Navigate(['login']));
        }
    }

    @Action(RemoveFriendAction)
    async removeFriends(ctx: StateContext<FriendsStateModel>,{payload}: RemoveFriendAction) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            const request:IRemoveFriend={
                userId: currentUserId,
                friend: payload
            }

            const response = await this.friendsService.removeFriend(request);
            if(response.validate){
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
        }else {
            alert("Sorry, You are no logged in");
            ctx.dispatch(new Navigate(['login']));
        }
    }

    @Action(AddFriendAction)
    async addFriend(ctx: StateContext<FriendsStateModel>, {payload}: AddFriendAction) {
        const currentUserId = await this.authApi.getCurrentUserId();
        if(currentUserId!=null) {
            const request:IAddFriend={
                userId: currentUserId,
                friend: payload
            }
            const response: IAddedFriend = await this.friendsService.addFriend(request);
            ctx.setState({
                friends:[response.friend!,...ctx.getState().friends]
            })
        }else {
            alert("Sorry, You are no logged in");
            ctx.dispatch(new Navigate(['login']));
        }
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
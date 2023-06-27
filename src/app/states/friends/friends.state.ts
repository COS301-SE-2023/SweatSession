import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { Router } from "@angular/router";
import { FriendsService } from "src/app/services";
import { AddFriendAction, GetFriendsAction, RemoveFriendAction } from "src/app/actions";
import { IAddFriend, IAddedFriend, IFriendsModel, IGetFriends, IGotFriends, IRemoveFriend } from "src/app/models";
import { AuthApi } from '../auth/auth.api';
import { catchError, of, tap } from "rxjs";

export interface FriendsStateModel {
    friends: IFriendsModel[];
    length: number;
}

@State<FriendsStateModel>({
    name: "friends",
    defaults: {
        friends: [],
        length: 0
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

            return (await this.friendsService.getFriends(request)).pipe(
                tap((response: IGotFriends)=>{
                    ctx.setState({
                        ...ctx.getState(), friends: response.friends,
                        length: response.friends.length
                    })
                }),
                catchError((error) => {
                    alert(error)
                    ctx.setState({
                        friends: [],
                        length: 0
                    })
                    return of(error);
                })
            );
           
        }else {
           return ctx.dispatch(new Navigate(['home/dashboard']));
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
            ctx.dispatch(new Navigate(['home/dashboard']));
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
            return (await this.friendsService.addFriend(request)).pipe(
                tap((response)=>{
                ctx.patchState({
                    friends:[response.friend!,...ctx.getState().friends]
                }),
                catchError((error)=>{
                    return of(error);
                })
            }))
            
        }else {
            return ctx.dispatch(new Navigate(['home/dashboard']));
        }
    }

    @Selector()
    static returnFriends(state: FriendsStateModel){
        return state.friends;
    }

    @Selector() 
    static returnFriendsSize(state: FriendsStateModel){
        return state.length;
    }
}
import { Injectable, OnInit } from "@angular/core";
import { Action, State, StateContext, Store, Selector } from "@ngxs/store";
import { Router } from "@angular/router";
import { OtheruserService, ProfileService } from "src/app/services";
import { GetProfileAction } from "src/app/actions/profile.action";
import { IGetProfile,IGotProfile, IProfileModel } from "src/app/models";
import { tap } from "rxjs/operators";

export class ProfileStateModel {
    profile?: IProfileModel[];
    otheruser?: IProfileModel;
}

@State<ProfileStateModel>({
    name: "profile",
    defaults: {
        profile: undefined,
        otheruser: {}
    }
})

@Injectable()
export class ProfileState{
  constructor(
    private readonly store: Store,
    private readonly profileService: ProfileService,
    private readonly otheruserService: OtheruserService
    ) {}


    @Action(GetProfileAction)
    async GetProfile(ctx: StateContext<ProfileStateModel>, action: GetProfileAction) {
      const request: IGetProfile = {
          userId: action.payload.userId
      }

      const response: IGotProfile | undefined = await this.profileService
      .getProfile(request)
      .pipe(tap((profile: IGotProfile | undefined) => {
        if (profile) {
          ctx.patchState({
            ...ctx.getState(),
            profile: [profile.profile] // Wrap the profile in an array
          });
        } else {
          ctx.patchState({
            ...ctx.getState(),
            profile: undefined
          });
        }
      }))
      .toPromise();
      
      if(response){
          ctx.patchState({
            profile:[response.profile]
        })
      }else{
          ctx.patchState({
            profile:undefined
        })
      }
    }

    @Selector()
    static returnProfile(state: ProfileStateModel) {
        return state.profile;
    }
}

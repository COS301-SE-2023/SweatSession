import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { GetProfileAction } from "src/app/actions/profile.action";
import { IGetProfile, IGotProfile, IProfileModel } from "src/app/models";
import { OtheruserService, ProfileService } from "src/app/services";

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

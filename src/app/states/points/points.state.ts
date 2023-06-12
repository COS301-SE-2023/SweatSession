import { Injectable } from "@angular/core";
import { State, Store, Selector, Action } from "@ngxs/store";
import { PointsApi } from "./points.api";


export interface PointsStateModel {
    // points: IPoints | null | undefined;
}
@State<PointsStateModel>({
    name: 'points',
    defaults: {
      points: null
    }
  })
  @Injectable()
  export class PointsState {
    constructor(private readonly pointsApi: PointsApi, private readonly store: Store) { }
  
    @Selector()
    static userPoints(state: PointsStateModel) {
    //   return state.points?.;
    }
  
    @Selector()
    static points(state: PointsStateModel) {
    //   return state.points;
    }
  
    // @Action(SubscribeToBadges)
    // public subscribeToBadgesState(context: StateContext<BadgesStateModel>) {
    //   return this.badgesApi.badges$().pipe(
    //     tap((currBadges: IBadges) => {
    //       console.log("IN subscribeToBadges");
    //       console.log(currBadges);
    //       context.dispatch(new SetBadges(currBadges));
    //     })
    //   );
    // }
  
    // @Action(SetBadges)
    // async setBadges(context: StateContext<BadgesStateModel>, { badges }: SetBadges) {
    //   return context.setState(
    //     produce((repr) => {
    //       repr.currBadges = badges;
    //     })
    //   );
    // }
  }
  
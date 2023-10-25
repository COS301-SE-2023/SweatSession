import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import produce from "immer";
import { tap } from 'rxjs';
import { SetPoints, SubscribeToPoints } from "src/app/actions/points.actions";
import { IPoints } from "src/app/models/points.model";
import { PointsApi } from "./points.api";


export interface PointsStateModel {
    points: IPoints | null | undefined;
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
        return state.points?.userPoints;
    }
  
    @Selector()
    static points(state: PointsStateModel) {
        return state.points;
    }

    @Selector()
    static workoutSessionsAttended(state: PointsStateModel) {
      return Number(state.points?.sessionsCompleted)%3
    }
  
    @Action(SubscribeToPoints)
    public subscribeToPointsState(context: StateContext<PointsStateModel>) {
      return this.pointsApi.points$().pipe(
        tap((points: IPoints) => {
          console.log("IN subscribeToPoints");
          console.log(points);
          context.dispatch(new SetPoints(points));
        })
      );
    }
  
    @Action(SetPoints)
    async setPoints(context: StateContext<PointsStateModel>, { points }: SetPoints) {
      return context.setState(
        produce((repr) => {
          repr.points = points;
        })
      );
    }

    // @Action(GetOtherUserPoints)
    // public getOtherUserPoints(context: StateContext<PointsStateModel>) {
    //   return this.pointsApi.otherUserPoints$().pipe(
    //     tap((points: IPoints) => {
    //       console.log("IN subscribeToPoints");
    //       console.log(points);
    //       context.dispatch(new SetPoints(points));
    //     })
    //   );
    // }
  }
  
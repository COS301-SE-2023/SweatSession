import { Injectable } from "@angular/core";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import produce from "immer";
import { SetPoints, SubscribeToPoints } from "src/app/actions/points.actions";
import { IPoints } from "src/app/models/points.model";
import { PointsApi } from "./points.api";
import { Observable, tap } from 'rxjs';


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
  }
  
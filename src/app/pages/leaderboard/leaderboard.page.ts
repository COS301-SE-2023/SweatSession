import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, forkJoin, map, switchMap, tap } from 'rxjs';
import { GetFriendsAction, GetUsersAction, SubscribeToAuthState } from 'src/app/actions';
import { IFriendsModel, IPoints, IProfileModel } from 'src/app/models';
import { IBadges } from 'src/app/models/badges.model';
import { AuthState, FriendsState, OtheruserState, PointsApi } from 'src/app/states';
import { BadgesApi } from 'src/app/states/badges/badges.api';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  @Select(OtheruserState.returnProfiles) users$ : Observable<IProfileModel[]>;
  @Select(FriendsState.returnFriends) friends$ : Observable<IFriendsModel[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  points$: Observable<IPoints>;
  userId:string;
  users: IProfileModel[]=[];
  friends: IProfileModel[]=[];
  selectedSegment: any="everyone";
  isLoading = true;
  badges$: Observable<IBadges>;

  constructor(private store:Store, private pointsApi: PointsApi, private badgesApi: BadgesApi) { }

  ngOnInit() {
   this.initialize();
  }

  /**
   * subscribe to the @users$ observable and get user profiles in sorted order(descending) based on user points.
   */
  initialize() {
    this.store.dispatch(new SubscribeToAuthState());
    this.store.dispatch(new GetUsersAction());
    this.store.dispatch(new GetFriendsAction());
  
    this.userId$.pipe(
      tap((response) => {
        this.userId = response;
      }),
      switchMap(() => this.users$),
      tap((response) => {
        this.users = response;
      }),
      switchMap(() => {
        const requests = this.users.map(user =>
          this.pointsApi.otherUserPoints$(user.userId!).pipe(
            tap(response => {
              user.points = response ? response.userPoints : 0;
              user.sessionsCompleted = response.workoutSessionsAttended ? response.workoutSessionsAttended : 0;
              this.badgesApi.otheruserbadges$(user.userId!).subscribe((result)=>{
                user.badgesNumber = result.receivedBadges.length;
                this.users.sort((userA, userB) =>{
                  if(userB.points! == userA.points!) {
                    if(userB.badgesNumber! == userA.badgesNumber!) {
                      return userB.sessionsCompleted! - userA.sessionsCompleted!
                    }
                   return userB.badgesNumber! - userA.badgesNumber!
                  }
                  return userB.points! - userA.points!
                });
                this.users = [...this.users];
              })
            }),
            switchMap(()=>this.friends$),
            map((response)=>{
              this.updateFriends(response);
              this.sortProfiles(this.friends);
            })
          )
        );
        return forkJoin(requests);
      })
    ).subscribe();
  }

  /**
   * subscribe to the @friends$ observable to get user friends
   */
  updateFriends(friends: IFriendsModel[]) {
    this.friends = [];
    const currentUser = this.users.find(u => u.userId === this.userId);
    if(currentUser) {
      this.friends.push(currentUser);
    }
    friends.forEach(friend => {
      const user = this.users.find(u => u.userId === friend.userId);
      if (user) {
        this.friends.push(user);
      }
    });
  }

  /**
   * sort the users in Desceding order of users points.
   */
  sortProfiles(profiles: IProfileModel[]){
   const p = profiles.sort((userA, userB) =>{
      if(userB.points! == userA.points!) {
        if(userB.badgesNumber! == userA.badgesNumber!) {
          return userB.sessionsCompleted! - userA.sessionsCompleted!
        }
       return userB.badgesNumber! - userA.badgesNumber!
      }
      return userB.points! - userA.points!
    });

    this.friends = [...p];
  }
  
  
  isCurrentUser(user:IProfileModel) {
    if(this.userId && user.userId){
      return this.userId === user.userId;
    }
    return false;
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }
}

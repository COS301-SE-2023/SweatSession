import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, forkJoin, map, switchMap, tap } from 'rxjs';
import { GetFriendsAction, GetUsersAction, GetUsersRanked, SubscribeToAuthState } from 'src/app/actions';
import { IFriendsModel, IPoints, IProfileModel } from 'src/app/models';
import { IBadges } from 'src/app/models/badges.model';
import { ProfileService } from 'src/app/services';
import { AuthState,ProfileState, FriendsState, OtheruserState, PointsApi } from 'src/app/states';
import { BadgesApi } from 'src/app/states/badges/badges.api';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  @Select(ProfileState.returnProfiles) users$ : Observable<IProfileModel[]>;
  @Select(FriendsState.returnFriends) friends$ : Observable<IFriendsModel[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  points$: Observable<IPoints>;
  userId:string;
  users: IProfileModel[]=[];
  friends: IProfileModel[]=[];
  selectedSegment: any="everyone";
  isLoading = true;
  badges$: Observable<IBadges>;
  private userSubscription: Subscription;

  constructor(private store:Store, private pointsApi: PointsApi, private badgesApi: BadgesApi, private profileService: ProfileService) { }

  ngOnInit() {
   this.initialize();
  }

  /**
   * subscribe to the @users$ observable and get user profiles in sorted order(descending) based on user points.
   */
  initialize() {
    this.store.dispatch(new SubscribeToAuthState());
    this.store.dispatch(new GetFriendsAction());
    this.store.dispatch(new GetUsersRanked());
  
    this.userSubscription = this.userId$.pipe(
      tap((response) => {
        this.userId = response;
      }),
      switchMap(() => this.users$),
      tap((response) => {
        this.users = response;
        console.table(response);
      }),
      switchMap(()=> this.friends$),
      tap((response)=>{
        this.updateFriends(response);
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

    this.sortProfiles(this.friends);
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

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}

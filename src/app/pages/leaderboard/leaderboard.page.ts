import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, switchMap, tap, lastValueFrom, forkJoin } from 'rxjs';
import { GetFriendsAction, GetUsersAction, SubscribeToAuthState } from 'src/app/actions';
import { IFriendsModel, IProfileModel, IPoints } from 'src/app/models';
import { AuthState, FriendsState, OtheruserState, PointsApi } from 'src/app/states';
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

  constructor(private store:Store, private pointsApi: PointsApi) { }

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
              this.users.sort((userA, userB) => userB.points! - userA.points!);
              this.users = [...this.users]; // Update the users array after modifying a user
            })
          )
        );
        return forkJoin(requests);
      })
    ).subscribe();

    this.friends$.subscribe((response)=>{
     this.updateFriends(response);
    })
  }
  

  /**
   * subscribe to the @friends$ observable to get user friends
   */
  updateFriends(friends: IFriendsModel[]) {
    this.friends = [];
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
  sort() {
    this.users.sort((userA, userB) => userB.points! - userA.points!) 
    console.table(this.users);
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

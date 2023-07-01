import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetFriendsAction, GetUsersAction, SubscribeToAuthState } from 'src/app/actions';
import { IFriendsModel, IProfileModel } from 'src/app/models';
import { AuthState, FriendsState, OtheruserState } from 'src/app/states';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  @Select(OtheruserState.returnProfiles) users$ : Observable<IProfileModel[]>;
  @Select(FriendsState.returnFriends) friends$ : Observable<IFriendsModel[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  userId:string;
  users: IProfileModel[]=[];
  friends: IProfileModel[]=[];
  selectedSegment: any="everyone";
  isLoading = true;

  constructor(private store:Store) { }

  ngOnInit() {
    this.getUsers();
    this.getFriends();
  }

  /**
   * subscribe to the @users$ observable and get user profiles in sorted order(descending) based on user points.
   */
  getUsers() {
    this.store.dispatch(new SubscribeToAuthState())
    this.store.dispatch(new GetUsersAction());
    this.users$.subscribe((response)=>{
      if(response) {
        this.users = response;
        this.sort()
      }
    })

    this.userId$.subscribe((response)=>{
      this.userId = response;
    })
  }

  /**
   * subscribe to the @friends$ observable to get user friends
   */
  getFriends() {
    this.friends = [];
    this.store.dispatch(new GetFriendsAction())
    this.friends$.subscribe((response)=>{
      if(response) {
        response.forEach((friend)=>{
         this.users.filter((user)=>{
            if(user.userId?.match(friend.userId!)) {
              this.friends.push(user);
              return;
            }
          })
        })
      }
    })
  }

  /**
   * sort the users in Desceding order of users points.
   */
  sort() {
    // this.users.sort((userA, userB)=> userB.points - userA.points)
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

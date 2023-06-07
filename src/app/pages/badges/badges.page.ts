import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBadges } from 'src/app/models/badges.model';
import { AuthApi } from 'src/app/states/auth/auth.api';
// import { BadgesApi } from 'src/app/states/badges/badges.api';
import { BadgesService } from 'src/app/services/badges/badges.service';
import { SubscribeToBadges } from 'src/app/actions/badges.actions';
import { Select, Store } from '@ngxs/store';
import { BadgesState } from 'src/app/states/badges/badges.state';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  @Select(BadgesState.receivedBadges)
  badges$!: Observable<IBadges | null>;
  badges=[{
      header:"Starter's Success",
      description:"Congratulations! You have completed your first workout plan",
      received:true
    },{
      header:"Socialite",
      description:"Congratulations! You have made 5 workout partners",
      received:true
    },{
      header:"Record Breaker",
      description:"Congratulations! You have reached a new personal best for bench presses",
      received:true
    },{
      header:"Workout Warrior",
      description:"Attend 20 workout sessions to get this badge",
      received:false
    },{
      header:"Dynamic Duo",
      description:"Complete 50 workout sessions with a friend",
      received:false
    },{
      header:"Push-Up Pro",
      description:"Do 100 push-ups in a day",
      received:false
    }
  ];
  constructor(
    // private badgesApi: BadgesApi,
    private authApi: AuthApi,
    private badgesService: BadgesService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(new SubscribeToBadges());
    // this.badgesApi.badges$().subscribe((response:IBadges)=>{
    //   this.badges1=response;
    //   alert(this.badges1);
    // });
    
    // this.badgesService.badges$().subscribe((response:IBadges)=>{
    //   this.badges1=response;
    //   alert(this.badges1);
    // });
  }
}

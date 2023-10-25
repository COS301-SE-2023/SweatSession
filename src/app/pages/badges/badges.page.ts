import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBadges } from 'src/app/models/badges.model';
import { AuthApi } from 'src/app/states/auth/auth.api';
// import { BadgesApi } from 'src/app/states/badges/badges.api';
// import { BadgesService } from 'src/app/services/badges/badges.service';
import { Select, Store } from '@ngxs/store';
import { SubscribeToBadges } from 'src/app/actions/badges.actions';
import { BadgesState } from 'src/app/states/badges/badges.state';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {

  @Select(BadgesState.currBadges)
  receivedBadges$!: Observable<IBadges | null>;

  badges=[{
      header:"Starter's Success",
      receivedDescription:"Congratulations! You have completed your first workout plan",
      notReceivedDescription:"Complete a workout plan to earn this badge",
      imageName:"assets/badges/starterssuccess.png",
      received:false
    },{
      header:"Socialite",
      receivedDescription:"Congratulations! You have made 5 workout partners",
      notReceivedDescription:"Make 5 friends to earn this badge",
      imageName:"assets/badges/socialite.png",
      received:false
    },{
      header: "Stretching Star",
      receivedDescription: "Congratulations! You have incorporated stretching exercises into your workout plan",
      notReceivedDescription: "Incorporate stretching exercises into your workout plan",
      imageName:"assets/badges/stretchingstarnotext.png",
      received: false
    },{
      header:"Record Breaker",
      receivedDescription:"Congratulations! You have reached a new personal best for bench presses",
      notReceivedDescription:"Reach a new personal best for bench presses to earn this badge",
      imageName:"assets/badges/recordbreaker.png",
      received:false
    },{
      header:"Workout Warrior",
      receivedDescription:"Congratulations! You have attended 20 workout sessions",
      notReceivedDescription:"Attend 20 workout sessions to earn this badge",
      imageName:"assets/badges/workoutwarrior.png",
      received:false
    },{
      header:"Dynamic Duo",
      receivedDescription:"Congratulations! You have joined a workout session with a friend",
      notReceivedDescription:"Join a workout session with a friend to earn this badge",
      imageName:"assets/badges/dynamicduo.png",
      received:false
    },
    // {
    //   header:"Push-Up Pro",
    //   receivedDescription:"Congratulations! You did 100 push-ups in a day",
    //   notReceivedDescription:"Do 100 push-ups in a day to earn this badge",
    //   imageName:"assets/badges/pushupspro.png",
    //   received:false
    // },
    {
      header:"Active Adventurer",
      receivedDescription:"Congratulations! You did a workout session at 5 gyms",
      notReceivedDescription:"Do a workout session at 5 gyms to earn this badge",
      imageName:"assets/badges/activeadventurer.png",
      received:false
    }
  ];
  receivedBadgesSubscription: any;
  constructor(
    // private badgesApi: BadgesApi,
    private authApi: AuthApi,
    // private badgesService: BadgesService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(new SubscribeToBadges());
    this.receivedBadgesSubscription=this.receivedBadges$.pipe(
      // Use the map operator to transform the observable value
      map((badges: IBadges | null) => {
        if (badges) {
          return badges.receivedBadges;
        } else {
          return []; // Return an empty array if badges is null
        }
      })
    ).subscribe((receivedBadges: Number[]) => {
      // Iterate through the receivedBadges array
      receivedBadges.forEach((badgeNumber: Number) => {
        this.badges[badgeNumber.valueOf()].received=true;
        console.log(badgeNumber);
        // Perform any other operations with each badge number
      });
    });
  }

  ngOnDestroy() {
    this.receivedBadgesSubscription.unsubscribe();
  }
}

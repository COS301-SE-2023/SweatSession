import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeaderboardPageRoutingModule } from './leaderboard-routing.module';
import { LeaderboardPage } from './leaderboard.page';
import { UserComponent } from './user/user.component';
import { AuthModule, FriendsStateModule, OtheruserStateModule, ProfileStateModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaderboardPageRoutingModule,
    OtheruserStateModule,
    FriendsStateModule,
    AuthModule,
    ProfileStateModule
  ],
  declarations: [LeaderboardPage, UserComponent]
})
export class LeaderboardPageModule {}

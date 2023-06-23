import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
// import { AuthState } from './auth.state';
import { OtherUserBadgesApi } from './otheruserbadges.api';
import { OtherUserBadgesState } from './otheruserbadges.state';
//import { BadgesService } from 'src/app/services/badges/badges.service';
// import { AuthApi } from '../auth/auth.api';


@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([OtherUserBadgesState])],
  providers: [OtherUserBadgesApi]
})
export class OtherUserBadgesModule {}
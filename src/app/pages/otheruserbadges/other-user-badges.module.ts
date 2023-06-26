import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherUserBadgesPageRoutingModule } from './other-user-badges-routing.module';

import { OtherUserBadgesPage } from './other-user-badges.page';
import { BadgeComponent } from './badge/badge.component';
import { OtherUserBadgesModule as OtherUserBadgesStatesModule } from 'src/app/states/otheruserbadges';
import { OtherUserBadgesApi } from 'src/app/states/otheruserbadges/otheruserbadges.api';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherUserBadgesPageRoutingModule,
    OtherUserBadgesStatesModule,
    BackButtonDirectiveModule,
  ],
  declarations: [OtherUserBadgesPage, BadgeComponent],
  providers: [OtherUserBadgesApi, AuthApi]
})
export class OtherUserBadgesPageModule {}

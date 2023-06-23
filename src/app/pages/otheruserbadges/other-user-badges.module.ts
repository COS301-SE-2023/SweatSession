import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherUserBadgesPageRoutingModule } from './other-user-badges-routing.module';

import { OtherUserBadgesPage } from './other-user-badges.page';
import { BadgeComponent } from './badge/badge.component';
import { BadgesModule as BadgesStatesModule } from 'src/app/states/badges';
import { BadgesApi } from 'src/app/states/badges/badges.api';
import { AuthApi } from 'src/app/states/auth/auth.api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherUserBadgesPageRoutingModule
  ],
  declarations: [OtherUserBadgesPage, BadgeComponent]
})
export class OtherUserBadgesPageModule {}

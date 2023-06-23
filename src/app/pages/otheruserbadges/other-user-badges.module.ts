import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherUserBadgesPageRoutingModule } from './other-user-badges-routing.module';

import { OtherUserBadgesPage } from './other-user-badges.page';
import { BadgeComponent } from './badge/badge.component';

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

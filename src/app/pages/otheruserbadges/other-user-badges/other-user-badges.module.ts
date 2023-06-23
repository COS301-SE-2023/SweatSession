import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherUserBadgesPageRoutingModule } from './other-user-badges-routing.module';

import { OtherUserBadgesPage } from './other-user-badges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherUserBadgesPageRoutingModule
  ],
  declarations: [OtherUserBadgesPage]
})
export class OtherUserBadgesPageModule {}

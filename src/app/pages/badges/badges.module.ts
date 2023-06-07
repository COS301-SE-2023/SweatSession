import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgesPageRoutingModule } from './badges-routing.module';

import { BadgesPage } from './badges.page';
import { BadgeComponent } from './badge/badge.component';
import { BadgesApi } from 'src/app/states/badges/badges.api';
import { AuthApi } from 'src/app/states/auth/auth.api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgesPageRoutingModule,
    //BadgesStatesModule,
  ],
  declarations: [BadgesPage, BadgeComponent],
  providers: [BadgesApi, AuthApi]
})
export class BadgesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgesPageRoutingModule } from './badges-routing.module';

import { BadgesPage } from './badges.page';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgesPageRoutingModule
    //BadgesStatesModule,
  ],
  declarations: [BadgesPage, BadgeComponent]
})
export class BadgesPageModule {}

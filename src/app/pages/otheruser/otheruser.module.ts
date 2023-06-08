import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtheruserPageRoutingModule } from './otheruser-routing.module';

import { OtheruserPage } from './otheruser.page';
import { OtheruserStateModule } from 'src/app/states';
import { FriendsComponent } from './friends/friends.component';
import { SchedulesComponent } from './schedules/schedules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtheruserPageRoutingModule,
    OtheruserStateModule,
  ],
  declarations: [OtheruserPage, FriendsComponent, SchedulesComponent],
})
export class OtheruserPageModule {}

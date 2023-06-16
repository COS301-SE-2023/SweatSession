import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtheruserPageRoutingModule } from './otheruser-routing.module';

import { OtheruserPage } from './otheruser.page';
import { OtheruserStateModule } from 'src/app/states';
import { FriendsComponent } from './friends/friends.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PopupScheduleModule } from "../workout-scheduling/popout-schedule/popout-schedule.module";
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtheruserPageRoutingModule,
    OtheruserStateModule,
    PopupScheduleModule,
    WorkoutSchedulingStateModule,
    BackButtonDirectiveModule
  ],
  declarations: [OtheruserPage, FriendsComponent, SchedulesComponent],
})
export class OtheruserPageModule {}

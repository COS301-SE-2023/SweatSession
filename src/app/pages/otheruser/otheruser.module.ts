import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtheruserPageRoutingModule } from './otheruser-routing.module';

import { OtheruserPage } from './otheruser.page';
import { AuthModule, FriendsStateModule, OtheruserStateModule } from 'src/app/states';
import { FriendsComponent } from './friends/friends.component';
import { SchedulesComponent } from './schedules/schedules.component';
//import { ScheduleContentModule } from "../workout-scheduling/schedulecontent/schedule-content.module";
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { WorkoutSchedulingPageModule } from '../workout-scheduling/workout-scheduling.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtheruserPageRoutingModule,
    OtheruserStateModule,
    WorkoutSchedulingPageModule,
    WorkoutSchedulingStateModule,
    BackButtonDirectiveModule,
    AuthModule,
    FriendsStateModule
  ],
  declarations: [OtheruserPage, FriendsComponent, SchedulesComponent],
})
export class OtheruserPageModule {}

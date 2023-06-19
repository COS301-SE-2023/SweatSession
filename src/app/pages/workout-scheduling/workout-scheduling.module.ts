import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingPage } from './workout-scheduling.page';
import { WorkoutSchedulingPageRoutingModule } from './workout-scheduling-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { PopupScheduleModule } from './popout-schedule/popout-schedule.module';
import { PopoutAddScheduleComponent } from "./popout-add-schedule/popout-add-schedule.component";
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { BackbuttonComponent } from 'src/app/directives/backbutton/backbutton.component';
import { SearchComponentModule } from '../search/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutSchedulingPageRoutingModule,
    WorkoutSchedulingStateModule,
    PopupScheduleModule,
    BackButtonDirectiveModule,
    SearchComponentModule
  ],
  declarations: [WorkoutSchedulingPage, ScheduleComponent, PopoutAddScheduleComponent],
})
export class WorkoutSchedulingPageModule {}

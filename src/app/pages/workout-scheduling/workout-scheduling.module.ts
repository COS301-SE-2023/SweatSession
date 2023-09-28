import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingPage } from './workout-scheduling.page';
import { WorkoutSchedulingPageRoutingModule } from './workout-scheduling-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { MessageStateModule, WorkoutSchedulingStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { SearchComponentModule } from '../search/search/search.module';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleContentComponent } from './schedulecontent/schedule-content.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { FriendsListComponent } from './friends-list/friends-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutSchedulingPageRoutingModule,
    WorkoutSchedulingStateModule,
    BackButtonDirectiveModule,
    SearchComponentModule,
    MessageStateModule
  ],
  declarations: [WorkoutSchedulingPage, ScheduleComponent, AddScheduleComponent, ScheduleContentComponent,EditScheduleComponent, FriendsListComponent],
  exports: [ScheduleComponent, AddScheduleComponent, ScheduleContentComponent,EditScheduleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkoutSchedulingPageModule {}

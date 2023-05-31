import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutTrackingPageRoutingModule } from './workout-tracking-routing.module';

import { WorkoutTrackingPage } from './workout-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutTrackingPageRoutingModule
  ],
  declarations: [WorkoutTrackingPage]
})
export class WorkoutTrackingPageModule {}

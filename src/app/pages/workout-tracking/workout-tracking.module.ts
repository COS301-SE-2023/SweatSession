import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutTrackingPageRoutingModule } from './workout-tracking-routing.module';

import { BackButtonDirectiveModule } from 'src/app/directives';
import { WorkoutTrackingPage } from './workout-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WorkoutTrackingPageRoutingModule,
    BackButtonDirectiveModule
  ],
  declarations: [WorkoutTrackingPage],
})
export class WorkoutTrackingPageModule {}

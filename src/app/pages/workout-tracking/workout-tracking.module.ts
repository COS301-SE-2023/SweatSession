import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutTrackingPageRoutingModule } from './workout-tracking-routing.module';

import { WorkoutTrackingPage } from './workout-tracking.page';
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WorkoutTrackingPageRoutingModule,
    BackButtonDirectiveModule
  ],
  declarations: [WorkoutTrackingPage]
})
export class WorkoutTrackingPageModule {}

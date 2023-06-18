import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnessgoalsPageRoutingModule } from './fitnessgoals-routing.module';

import { FitnessgoalsPage } from './fitnessgoals.page';
import {GoalcardComponent} from "./goalcard/goalcard.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnessgoalsPageRoutingModule
  ],
  declarations: [FitnessgoalsPage,GoalcardComponent ]
})
export class FitnessgoalsPageModule {}

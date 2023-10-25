import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FitnessgoalsPageRoutingModule } from './fitnessgoals-routing.module';

import { BackButtonDirectiveModule } from 'src/app/directives';
import { FitnessgoalsPage } from './fitnessgoals.page';
import { GoalcardComponent } from "./goalcard/goalcard.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FitnessgoalsPageRoutingModule,
        ReactiveFormsModule,
        BackButtonDirectiveModule,

    ],
  declarations: [FitnessgoalsPage,GoalcardComponent ],
    providers: [GoalcardComponent]
})
export class FitnessgoalsPageModule {}

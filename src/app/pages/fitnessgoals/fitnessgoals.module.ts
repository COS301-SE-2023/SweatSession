import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgxsModule} from "@ngxs/store";
import {FitnessgoalState} from "../../states";
import { FitnessgoalsPageRoutingModule } from './fitnessgoals-routing.module';

import { FitnessgoalsPage } from './fitnessgoals.page';
import {GoalcardComponent} from "./goalcard/goalcard.component";
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FitnessgoalsPageRoutingModule,
        ReactiveFormsModule,
        BackButtonDirectiveModule
    ],
  declarations: [FitnessgoalsPage,GoalcardComponent ]
})
export class FitnessgoalsPageModule {}

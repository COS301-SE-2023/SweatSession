import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgxsModule} from "@ngxs/store";
import {FitnessgoalState} from "../../states";
import { FitnessgoalsPageRoutingModule } from './fitnessgoals-routing.module';

import { FitnessgoalsPage } from './fitnessgoals.page';
import {GoalcardComponent} from "./goalcard/goalcard.component";
<<<<<<< HEAD
import {BackButtonDirectiveModule} from "../../directives";
=======
import { BackButtonDirectiveModule } from 'src/app/directives';
>>>>>>> scheduling/Friends-services

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FitnessgoalsPageRoutingModule,
        ReactiveFormsModule,
<<<<<<< HEAD
        BackButtonDirectiveModule,
        // [FitnessgoalState],
        NgxsModule.forFeature([FitnessgoalState])
=======
        BackButtonDirectiveModule
>>>>>>> scheduling/Friends-services
    ],
  declarations: [FitnessgoalsPage,GoalcardComponent ]
})
export class FitnessgoalsPageModule {}

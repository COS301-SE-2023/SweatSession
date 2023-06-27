import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnessgoalViewPageRoutingModule } from './fitnessgoal-view-routing.module';

import { FitnessgoalViewPage } from './fitnessgoal-view.page';
import {BackButtonDirectiveModule} from "../../directives";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FitnessgoalViewPageRoutingModule,
        BackButtonDirectiveModule
    ],
  declarations: [FitnessgoalViewPage]
})
export class FitnessgoalViewPageModule {}

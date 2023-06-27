import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalviewPageRoutingModule } from './goalview-routing.module';

import { GoalviewPage } from './goalview.page';
import {BackButtonDirectiveModule} from "../../directives";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalviewPageRoutingModule,
    ReactiveFormsModule,
    BackButtonDirectiveModule
  ],
  declarations: [GoalviewPage]
})
export class GoalviewPageModule {}

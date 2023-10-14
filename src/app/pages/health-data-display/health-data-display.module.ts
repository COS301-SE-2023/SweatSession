import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthDataDisplayPageRoutingModule } from './health-data-display-routing.module';

import { HealthDataDisplayPage } from './health-data-display.page';
import {BackButtonDirectiveModule} from "../../directives";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HealthDataDisplayPageRoutingModule,
        BackButtonDirectiveModule
    ],
  declarations: [HealthDataDisplayPage]
})
export class HealthDataDisplayPageModule {}

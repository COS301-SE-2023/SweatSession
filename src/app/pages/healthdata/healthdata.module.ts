import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthdataPageRoutingModule } from './healthdata-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HealthDataPage } from './healthdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthdataPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [HealthDataPage]
})
export class HealthDataPageModule {}

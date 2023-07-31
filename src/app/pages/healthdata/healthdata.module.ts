import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthdataPageRoutingModule } from './healthdata-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { HealthDataPage } from './healthdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthdataPageRoutingModule,
    ReactiveFormsModule,
    BackButtonDirectiveModule
  ],
  declarations: [HealthDataPage]
})
export class HealthDataPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthdataPageRoutingModule } from './healthdata-routing.module';

import { HealthdataPage } from './healthdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthdataPageRoutingModule
  ],
  declarations: [HealthdataPage]
})
export class HealthdataPageModule {}

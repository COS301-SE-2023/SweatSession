import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointsPageRoutingModule } from './points-routing.module';
import { PointsModule as PointsStatesModule } from 'src/app/states/points';
import { PointsPage } from './points.page';
import { PointsApi } from 'src/app/states/points/points.api';
import { AuthApi } from 'src/app/states/auth/auth.api';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointsPageRoutingModule,
    PointsStatesModule
  ],
  declarations: [PointsPage],
  providers: [PointsApi, AuthApi]
})
export class PointsPageModule {}

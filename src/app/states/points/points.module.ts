import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PointsApi } from './points.api';
import { PointsState } from './points.state';



@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([PointsState])],
  providers: [PointsApi]
})
export class PointsModule {}
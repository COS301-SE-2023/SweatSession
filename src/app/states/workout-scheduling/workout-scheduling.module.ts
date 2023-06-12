import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { WorkoutSchedulingState } from './workout-scheduling.state';
import { AuthApi } from '../auth/auth.api';
// import { AuthApi } from './auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([WorkoutSchedulingState])],
  providers: [AuthApi],
})
export class WorkoutSchedulingStateModule {}
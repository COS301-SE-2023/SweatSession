import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { FitnessgoalState } from './fitnessgoal.state';
import { AuthApi } from '../auth/auth.api';


@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([FitnessgoalState])],
    providers: [AuthApi],
})
export class FitnessgoalModule { }

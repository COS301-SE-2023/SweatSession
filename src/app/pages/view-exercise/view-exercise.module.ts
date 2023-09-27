import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewExercisePageRoutingModule } from './view-exercise-routing.module';

import { ViewExercisePage } from './view-exercise.page';
import {BackButtonDirectiveModule} from "../../directives";
import {ExerciseExplorerPageModule} from "../exercise-explorer/exercise-explorer.module";
import {ExerciseExplorerPage} from "../exercise-explorer/exercise-explorer.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewExercisePageRoutingModule,
    BackButtonDirectiveModule,
  ],
  declarations: [ViewExercisePage],
  providers: []
})
export class ViewExercisePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaloriesCalculatorPageRoutingModule } from './calories-calculator-routing.module';

import { CaloriesCalculatorPage } from './calories-calculator.page';
import {BackButtonDirectiveModule} from "../../directives";
import { ExerciseCalculatorComponent } from './exercise-calculator/exercise-calculator.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CaloriesCalculatorPageRoutingModule,
        BackButtonDirectiveModule
    ],
  declarations: [CaloriesCalculatorPage, ExerciseCalculatorComponent]
})
export class CaloriesCalculatorPageModule {}

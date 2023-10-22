import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';


import { CaloriesCalculatorPageRoutingModule } from './calories-calculator-routing.module';

import { CaloriesCalculatorPage } from './calories-calculator.page';
import {BackButtonDirectiveModule} from "../../directives";
import { ExerciseCalculatorComponent } from './exercise-calculator/exercise-calculator.component';
import { CalorieTargetComponent } from './calorie-target/calorie-target.component';
import { DietCalculatorComponent } from './diet-calculator/diet-calculator.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CaloriesCalculatorPageRoutingModule,
        BackButtonDirectiveModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  declarations: [CaloriesCalculatorPage, ExerciseCalculatorComponent, CalorieTargetComponent, DietCalculatorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CaloriesCalculatorPageModule {}

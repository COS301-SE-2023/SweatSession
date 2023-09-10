import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaloriesCalculatorPage } from './calories-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: CaloriesCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaloriesCalculatorPageRoutingModule {}

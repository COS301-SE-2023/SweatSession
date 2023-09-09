import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewPersonalbestsPageRoutingModule } from './view-personalbests-routing.module';
import { PersonalBestsChartComponent } from './personal-bests-chart/personal-bests-chart.component';
import { ViewPersonalbestsPage } from './view-personalbests.page';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { BackButtonDirectiveModule } from 'src/app/directives';


@NgModule({
  imports: [
    NgChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPersonalbestsPageRoutingModule,
    ReactiveFormsModule,
    BackButtonDirectiveModule
  ],
  exports: [
    ReactiveFormsModule,
  ],
  declarations: [ 
    ViewPersonalbestsPage, PersonalBestsChartComponent
  ]
})
export class ViewPersonalbestsPageModule {}

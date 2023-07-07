import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewPersonalbestsPageRoutingModule } from './view-personalbests-routing.module';
import { PersonalBestsChartComponent } from './personal-bests-chart/personal-bests-chart.component';
import { ViewPersonalbestsPage } from './view-personalbests.page';
import { AddPersonalBestComponent } from './add-personal-best/add-personal-best.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    BrowserModule, 
    NgChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPersonalbestsPageRoutingModule
  ],
  declarations: 
              [ 
                ViewPersonalbestsPage,
                AddPersonalBestComponent,
                PersonalBestsChartComponent
              ],
})
export class ViewPersonalbestsPageModule {}

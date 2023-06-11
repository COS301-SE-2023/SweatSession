import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { AuthApi } from 'src/app/states/auth/auth.api';

import { HomePage } from './home.page';
import { AuthModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AuthModule
  ],
  declarations: [HomePage],
  providers: [AuthApi],
})
export class HomePageModule {}

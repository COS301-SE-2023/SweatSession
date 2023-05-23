import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
//import { RegisterPageRoutingModule } from './register-routing.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AuthModule as AuthStatesModule } from 'src/app/states/auth';
//import { AuthModule } from '@angular/fire/auth';
//import { RegisterPage } from './register.page';
import {NgxsModule} from '@ngxs/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuthStatesModule,
    NgxsFormPluginModule,
    NgxsModule,

  ]
})
export class AuthModule {}

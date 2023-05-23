import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-routing.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { LoginPage } from './login.page';
import { LoginModule as LoginStatesModule } from 'src/app/states/login';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    LoginStatesModule,
    NgxsFormPluginModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

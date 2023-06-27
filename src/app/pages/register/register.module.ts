import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageRoutingModule } from './register-routing.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { RegisterModule as RegisterStatesModule } from 'src/app/states/register';
import { RegisterPage } from './register.page';
import {NgxsModule} from '@ngxs/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    RegisterStatesModule,
    NgxsFormPluginModule,
    //NgxsModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { RegisterModule as RegisterStatesModule } from 'src/app/states/register';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

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
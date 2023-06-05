import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SetprofilePageRoutingModule } from './setprofile-routing.module';

import { SetprofilePage } from './setprofile.page';
import { AuthApi } from 'src/app/states/auth/auth.api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetprofilePageRoutingModule
  ],
  providers: [
    AuthApi
  ],
  declarations: [SetprofilePage]
})
export class SetprofilePageModule {}

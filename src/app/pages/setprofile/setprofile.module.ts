import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SetprofilePageRoutingModule } from './setprofile-routing.module';

import { SetprofilePage } from './setprofile.page';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { SetprofileCComponent } from './setProfileC/setProfileC.component';
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetprofilePageRoutingModule,
    ReactiveFormsModule,
    BackButtonDirectiveModule
  ],
  providers: [
    AuthApi
  ],
  declarations: [SetprofilePage,SetprofileCComponent]
})
export class SetprofilePageModule {}

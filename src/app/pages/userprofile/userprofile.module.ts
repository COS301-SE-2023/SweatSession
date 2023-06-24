import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserprofilePageRoutingModule } from './userprofile-routing.module';

import { UserprofilePage } from './userprofile.page';
import { Auth } from '@angular/fire/auth';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserprofilePageRoutingModule,
    BackButtonDirectiveModule
  ],
  declarations: [UserprofilePage],
  providers: [AuthApi]
})
export class UserprofilePageModule {}

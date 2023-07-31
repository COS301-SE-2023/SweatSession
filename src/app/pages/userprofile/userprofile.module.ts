import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserprofilePageRoutingModule } from './userprofile-routing.module';

import { UserprofilePage } from './userprofile.page';
import { Auth } from '@angular/fire/auth';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { FriendsStateModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserprofilePageRoutingModule,
    BackButtonDirectiveModule,
    FriendsStateModule,
  ],
  declarations: [UserprofilePage],
  providers: [AuthApi],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserprofilePageModule {}

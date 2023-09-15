import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserprofilePageRoutingModule } from './userprofile-routing.module';

import { UserprofilePage } from './userprofile.page';
import { Auth } from '@angular/fire/auth';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { FriendsStateModule, MessageStateModule } from 'src/app/states';
import {ImageModalComponent} from "./image-modal/image-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserprofilePageRoutingModule,
    BackButtonDirectiveModule,
    FriendsStateModule,
    MessageStateModule,

  ],
  declarations: [UserprofilePage, ImageModalComponent],
  providers: [AuthApi],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserprofilePageModule {}

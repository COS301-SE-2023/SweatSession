import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SetprofilePageRoutingModule } from './setprofile-routing.module';

import { SetprofilePage } from './setprofile.page';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { SetprofileCComponent } from './setProfileC/setProfileC.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetprofilePageRoutingModule,
    SetprofileCComponent,
  ],
  providers: [
    AuthApi
  ],
  declarations: [SetprofilePage]
})
export class SetprofilePageModule {}

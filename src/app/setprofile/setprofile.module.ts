import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetprofilePageRoutingModule } from './setprofile-routing.module';

import { SetprofilePage } from './setprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetprofilePageRoutingModule
  ],
  declarations: [SetprofilePage]
})
export class SetprofilePageModule {}

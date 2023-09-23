import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserManualPageRoutingModule } from './user-manual-routing.module';

import { UserManualPage } from './user-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserManualPageRoutingModule
  ],
  declarations: [UserManualPage]
})
export class UserManualPageModule {}

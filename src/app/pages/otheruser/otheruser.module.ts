import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtheruserPageRoutingModule } from './otheruser-routing.module';

import { OtheruserPage } from './otheruser.page';
import { AuthModule, FriendsStateModule, OtheruserStateModule } from 'src/app/states';
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtheruserPageRoutingModule,
    OtheruserStateModule,
    WorkoutSchedulingStateModule,
    BackButtonDirectiveModule,
    AuthModule,
    FriendsStateModule
  ],
  declarations: [OtheruserPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OtheruserPageModule {}

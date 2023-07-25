import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackButtonDirectiveModule } from 'src/app/directives';
import { GroupHomePageComponent } from './group-home-page.component';
import { AuthModule } from '@angular/fire/auth';
import { MessageStateModule, OtheruserStateModule } from 'src/app/states';
import { GroupUserComponentModule } from '../../messages/group-user/group-user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule,
    OtheruserStateModule,
    GroupUserComponentModule
  ],
  declarations: [GroupHomePageComponent],
  exports: [GroupHomePageComponent]
})
export class GroupsHomePageModule {}

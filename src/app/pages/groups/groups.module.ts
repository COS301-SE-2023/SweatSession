import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPageRoutingModule } from './groups-routing.module';

import { GroupsPage } from './groups.page';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { MessageStateModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPageRoutingModule,
    BackButtonDirectiveModule,
    MessageStateModule
  ],
  declarations: [GroupsPage]
})
export class GroupsPageModule {}

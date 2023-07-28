import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsPageRoutingModule } from './notifications-routing.module';

import { NotificationsPage } from './notifications.page';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { FriendsStateModule, OtheruserStateModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsPageRoutingModule,
    BackButtonDirectiveModule,
    OtheruserStateModule,
    FriendsStateModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}

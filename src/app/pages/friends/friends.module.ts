import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendsPageRoutingModule } from './friends-routing.module';

import { FriendsPage } from './friends.page';
import { FriendComponent } from './friend/friend.component';
import { FriendsStateModule } from 'src/app/states';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { SearchComponentModule } from '../search/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsPageRoutingModule,
    FriendsStateModule,
    BackButtonDirectiveModule,
    SearchComponentModule,
  ],
  declarations: [FriendsPage,FriendComponent]
})
export class FriendsPageModule {}

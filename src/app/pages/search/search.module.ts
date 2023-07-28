import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule, ToastController } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { GymsearchComponent } from './gymsearch/gymsearch.component';
import { OtheruserStateModule, AuthModule } from 'src/app/states';
import { GroupSearchComponent } from './group/group.component';
import { GroupsHomePageModule } from '../groups/group-home-page/group-home-page.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    OtheruserStateModule,
    AuthModule,
    GroupsHomePageModule
  ],
  declarations: [SearchPage, UsersearchComponent, GymsearchComponent,GroupSearchComponent]
})
export class SearchPageModule {}
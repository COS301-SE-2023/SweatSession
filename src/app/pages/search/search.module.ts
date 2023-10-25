import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { AuthModule, OtheruserStateModule } from 'src/app/states';
import { GroupsHomePageModule } from '../groups/group-home-page/group-home-page.module';
import { GroupSearchComponent } from './group/group.component';
import { GymsearchComponent } from './gymsearch/gymsearch.component';
import { SearchPage } from './search.page';
import { UsersearchComponent } from './usersearch/usersearch.component';


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
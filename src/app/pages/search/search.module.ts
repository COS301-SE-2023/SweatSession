import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule, ToastController } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { GymsearchComponent } from './gymsearch/gymsearch.component';
import { ProfileStateModule } from 'src/app/states';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ProfileStateModule
  ],
  declarations: [SearchPage, UsersearchComponent, GymsearchComponent]
})
export class SearchPageModule {}
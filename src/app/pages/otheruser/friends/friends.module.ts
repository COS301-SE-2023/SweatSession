import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { OtheruserStateModule } from 'src/app/states';
import { FriendsComponentRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { FriendsContentsComponent } from '../friends-contents/friends-contents.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      BackButtonDirectiveModule,
      OtheruserStateModule,
      FriendsComponentRoutingModule
    ],
    declarations: [ FriendsComponent, FriendsContentsComponent ],
})
export class ScheduleComponentModule {}
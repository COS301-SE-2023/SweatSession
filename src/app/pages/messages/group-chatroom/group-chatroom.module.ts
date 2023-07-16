import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupChatroomComponentRoutingModule } from './group-chatroom-routing.module';
import { GroupChatroomComponent } from './group-chatroom.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AuthModule, MessageStateModule, OtheruserStateModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule,
    GroupChatroomComponentRoutingModule,
    OtheruserStateModule
  ],
  declarations: [GroupChatroomComponent]
})
export class GroupChatroomComponentModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupChatroomComponentRoutingModule } from './group-chatroom-routing.module';
import { GroupChatroomComponent } from './group-chatroom.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AuthModule, MessageStateModule, OtheruserStateModule } from 'src/app/states';
import { ChatroomComponentModule } from '../chatroom/chatroom.module';
import { GroupUserComponentModule } from '../group-user/group-user.module';
import { GroupsHomePageModule } from '../../groups/group-home-page/group-home-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule,
    GroupChatroomComponentRoutingModule,
    OtheruserStateModule,
    ChatroomComponentModule,
    GroupUserComponentModule
  ],
  declarations: [GroupChatroomComponent],
})
export class GroupChatroomComponentModule {}
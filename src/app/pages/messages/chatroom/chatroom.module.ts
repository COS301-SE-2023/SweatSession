import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatroomComponentRoutingModule } from './chatroom-routing.module';
import { ChatroomComponent } from './chatroom.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AuthModule, MessageStateModule, OtheruserStateModule } from 'src/app/states';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule,
    ChatroomComponentRoutingModule,
    OtheruserStateModule
  ],
  declarations: [ChatroomComponent, ChatboxComponent]
})
export class ChatroomComponentModule {}

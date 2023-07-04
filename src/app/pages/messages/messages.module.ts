import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatComponent } from './chat/chat.component';
import { BackButtonDirectiveModule } from 'src/app/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    BackButtonDirectiveModule
  ],
  declarations: [MessagesPage, ChatroomComponent, ChatComponent]
})
export class MessagesPageModule {}

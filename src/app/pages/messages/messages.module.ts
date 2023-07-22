import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessagesPage } from './messages.page';
import { ChatComponent } from './chat/chat.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AuthModule, MessageStateModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule
  ],
  declarations: [MessagesPage, ChatComponent]
})
export class MessagesPageModule {}

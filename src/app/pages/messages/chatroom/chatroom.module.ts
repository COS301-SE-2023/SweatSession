import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatroomComponentRoutingModule } from './chatroom-routing.module';
import { ChatroomComponent } from './chatroom.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AuthModule, MessageStateModule } from 'src/app/states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule,
    ChatroomComponentRoutingModule
  ],
  declarations: [ChatroomComponent]
})
export class ChatroomComponentModule {}

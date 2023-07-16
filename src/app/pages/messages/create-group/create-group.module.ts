import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AuthModule, MessageStateModule, OtheruserStateModule } from 'src/app/states';
import { CreateGroupComponent } from './create-group.component';
import { CreateGroupComponentRoutingModule } from './create-group-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule,
    OtheruserStateModule,
    CreateGroupComponentRoutingModule
  ],
  declarations: [CreateGroupComponent]
})
export class CreateGroupComponentModule {}
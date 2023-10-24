import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AuthModule, MessageStateModule, OtheruserStateModule } from 'src/app/states';
import { GroupUserComponent } from '../group-user/group-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonDirectiveModule,
    MessageStateModule,
    AuthModule,
    OtheruserStateModule
  ],
  declarations: [GroupUserComponent],
  exports: [GroupUserComponent]
})
export class GroupUserComponentModule {}
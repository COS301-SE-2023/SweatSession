import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackButtonDirective } from './backbutton.directive';
import { IonicModule } from '@ionic/angular';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [BackbuttonComponent, NotifyComponent],
  exports: [BackbuttonComponent]
})
export class BackButtonDirectiveModule {}

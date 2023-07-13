//defualt module imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddPersonalBestComponent } from './add-personal-best.component';
//custom module imports

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  declarations: [AddPersonalBestComponent]
})
export class AddPersonalbestsPageModule {}

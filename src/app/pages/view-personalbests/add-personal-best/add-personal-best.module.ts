//defualt module imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddPersonalBestComponent } from './add-personal-best.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
//custom module imports

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BackButtonDirectiveModule,
  ],
  declarations: [AddPersonalBestComponent]
})
export class AddPersonalbestsPageModule {}

//defualt module imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddPersonalBestComponent } from './add-personal-best.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AddPersonalBestpageRoutingModule } from './add-personal-best.routing.module';
//custom module imports

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BackButtonDirectiveModule,
    AddPersonalBestpageRoutingModule
  ],
  declarations: [AddPersonalBestComponent]
})
export class AddPersonalbestsPageModule {}

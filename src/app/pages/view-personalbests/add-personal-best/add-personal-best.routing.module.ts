import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonalBestComponent } from './add-personal-best.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
    {
      path: '',
      component: AddPersonalBestComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes),CommonModule,
      FormsModule,IonicModule,ReactiveFormsModule],
    exports: [RouterModule],
    declarations: [AddPersonalBestComponent]
  })
  export class AddPersonalBestpageRoutingModule {}
  
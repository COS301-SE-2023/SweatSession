import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonalBestComponent } from './add-personal-best.component';

const routes: Routes = [
    {
      path: '',
      component: AddPersonalBestComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
  })
  export class AddPersonalBestpageRoutingModule {}
  
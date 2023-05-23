import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule as DataAccess } from '../data-access';


@NgModule({
  imports: [CommonModule, DataAccess],
})

export class AuthModule {}
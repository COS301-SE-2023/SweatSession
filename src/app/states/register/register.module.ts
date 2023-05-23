import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RegisterState } from './register.state';
import { AuthApi } from 'src/app/states/auth/auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([RegisterState])],
  //providers: []
  providers: [AuthApi],
})
export class RegisterModule {}

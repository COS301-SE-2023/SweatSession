import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LoginState } from './login.state';
import { AuthApi } from 'src/app/states/auth/auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([LoginState])],
  //providers: []
  providers: [AuthApi],
})
export class LoginModule {}

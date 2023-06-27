import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth.state';
import { AuthApi } from './auth.api';


@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([AuthState])],
  providers: [AuthApi]
})
export class AuthModule {}
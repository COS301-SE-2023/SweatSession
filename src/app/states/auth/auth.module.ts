import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth.state';
import { AuthApi } from './auth.api';
import { RegisterService } from 'src/app/services/registration/register.service';


@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([AuthState]), AuthModule],
  providers: [AuthApi, RegisterService]
})
export class AuthModule {}
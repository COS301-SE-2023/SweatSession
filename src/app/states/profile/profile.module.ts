import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ProfileState } from './profile.state';
//import { AuthApi } from '../auth/auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([ProfileState])],
  //providers: [AuthApi],
})
export class ProfileStateModule {}
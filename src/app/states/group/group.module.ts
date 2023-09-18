import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { GroupState } from './group.state';
import { AuthApi } from '../auth/auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([GroupState])],
  providers: [AuthApi],
})
export class GroupStateModule {}
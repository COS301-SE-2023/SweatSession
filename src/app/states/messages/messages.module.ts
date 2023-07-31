import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MessagesState } from './messages.state';
import { AuthApi } from '../auth/auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([MessagesState])],
  providers: [AuthApi],
})
export class MessageStateModule {}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FriendsState } from './friends.state';
// import { AuthApi } from './auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([FriendsState])],
 // providers: [AuthApi],
})
export class FriendsStateModule {}
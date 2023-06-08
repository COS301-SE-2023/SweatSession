import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
// import { AuthState } from './auth.state';
import { BadgesApi } from './badges.api';
import { BadgesState } from './badges.state';
//import { BadgesService } from 'src/app/services/badges/badges.service';
// import { AuthApi } from '../auth/auth.api';


@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([BadgesState])],//, NgxsModule.forFeature([AuthState])  //BadgesModule
  providers: [BadgesApi]//BadgesService
})
export class BadgesModule {}
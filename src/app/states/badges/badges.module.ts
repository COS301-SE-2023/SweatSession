import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
// import { AuthState } from './auth.state';
import { BadgesApi } from './badges.api';
import { BadgesService } from 'src/app/services/badges/badges.service';
import { AuthApi } from '../auth/auth.api';


@NgModule({
  imports: [CommonModule, BadgesModule],//, NgxsModule.forFeature([AuthState])
  providers: [BadgesApi, BadgesService]
})
export class BadgesModule {}
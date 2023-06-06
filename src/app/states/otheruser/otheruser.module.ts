import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { OtheruserState } from './otheruser.state';
// import { OtheruserApi } from './auth.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([OtheruserState])],
 // providers: [OtheruserApi],
})
export class OtheruserStateModule {}
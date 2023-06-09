import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterService } from 'src/app/services/registration';
import { NgxsModule } from '@ngxs/store';


@NgModule({
  imports: [CommonModule, RegisterModule],
  providers: [RegisterService]
})
export class RegisterModule {}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterService } from 'src/app/services/registration';


@NgModule({
  imports: [CommonModule, RegisterModule],
  providers: [RegisterService]
})
export class RegisterModule {}
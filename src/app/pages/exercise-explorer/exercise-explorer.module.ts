import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseExplorerPageRoutingModule } from './exercise-explorer-routing.module';

import { ExerciseExplorerPage } from './exercise-explorer.page';
import { BackButtonDirectiveModule } from 'src/app/directives/backbutton.module';
import { InstructionModalComponent } from './instruction-modal/instruction-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseExplorerPageRoutingModule,
    BackButtonDirectiveModule,
  ],
  declarations: [ExerciseExplorerPage, InstructionModalComponent],
  exports: [InstructionModalComponent]
})
export class ExerciseExplorerPageModule {}

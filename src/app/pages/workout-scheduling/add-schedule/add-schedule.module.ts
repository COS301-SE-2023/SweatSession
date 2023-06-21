import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSchedulingStateModule } from 'src/app/states';
import { AddScheduleComponent } from './add-schedule.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { AddSchedulePageRoutingModule } from './add-schedule.routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      AddSchedulePageRoutingModule
    //   WorkoutSchedulingStateModule,
    //   BackButtonDirectiveModule,
    ],
    declarations: [AddScheduleComponent],
    exports: [AddScheduleComponent]
})
export class AddScheduleModule {}
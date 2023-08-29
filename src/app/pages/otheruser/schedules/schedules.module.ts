import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulesComponent } from './schedules.component';
import { ScheduleContentComponent } from '../schedule-content/schedule-content.component';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { SchedulesComponentRoutingModule } from './schedules.routing.module';
import { OtheruserStateModule } from 'src/app/states';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      BackButtonDirectiveModule,
      SchedulesComponentRoutingModule,
      OtheruserStateModule
    ],
    declarations: [ SchedulesComponent, ScheduleContentComponent],
    exports: [ScheduleContentComponent]
})
export class ScheduleComponentModule {}
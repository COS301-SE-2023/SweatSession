import { Component, OnInit } from '@angular/core';
import { PopoverController, LoadingController, NavController } from '@ionic/angular';
// import { PopoutAddScheduleComponent } from './popout-add-schedule/popout-add-schedule.component';
import { Select, Store } from '@ngxs/store';
import { WorkoutSchedulingState } from 'src/app/states';
import { Observable } from 'rxjs';
import { ISearchTerms, IWorkoutScheduleModel } from 'src/app/models';
import { GetWorkoutSchedules } from 'src/app/actions';

@Component({
  selector: 'app-workout-scheduling',
  templateUrl: './workout-scheduling.page.html',
  styleUrls: ['./workout-scheduling.page.scss'],
})
export class WorkoutSchedulingPage {
  //data containers
  schedules: IWorkoutScheduleModel[]=[];
  completedSchedules: IWorkoutScheduleModel[]=[];
  uncompletedSchedules: IWorkoutScheduleModel[]=[];
  inSessionSchedules: IWorkoutScheduleModel[]=[];

  selectedSegment: string = '0';
 
  @Select(WorkoutSchedulingState.returnSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;
  isAddSlide = false;

  constructor(private popoverController: PopoverController, 
      private store : Store, 
      private loadingCtrl: LoadingController,
      private nav: NavController) {}

  ngOnInit() {
    this.displayWorkoutSchedule();
  }

  async addSchedule(){
    this.isAddSlide=!this.isAddSlide;
  }

  displayWorkoutSchedule(){
    this.store.dispatch(new GetWorkoutSchedules())
    this.schedules$.subscribe((response)=>{
      this.schedules = response;
      this.filterSchedules();
    });
  }

  filterSchedules() {
   this.completedSchedules = this.schedules.filter((schedule)=>
      schedule.status! === "completed"
    )

    this.uncompletedSchedules = this.schedules.filter((schedule)=>
      schedule.status!.match('uncompleted')
    )

    this.inSessionSchedules = this.schedules.filter((schedule)=>
      schedule.status!.match("inSession")
    )
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }
}

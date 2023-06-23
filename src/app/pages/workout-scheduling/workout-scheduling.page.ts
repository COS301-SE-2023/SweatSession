import { Component, OnInit } from '@angular/core';
import { PopoverController, LoadingController } from '@ionic/angular';
import { PopoutAddScheduleComponent } from './popout-add-schedule/popout-add-schedule.component';
import { Select, Store } from '@ngxs/store';
import { WorkoutSchedulingState } from 'src/app/states';
import { Observable } from 'rxjs';
import { ISearchTerms, IWorkoutScheduleModel } from 'src/app/models';
import { GetWorkoutSchedules } from 'src/app/actions';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private popoverController: PopoverController, 
    private store: Store, 
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.schedules$ = this.router.getCurrentNavigation()?.extras.state?.['schedules'];
      }
    });
  }

  ngOnInit() {
    this.displayWorkoutSchedule();
  }

  async addSchedule(){
    const popover = await this.popoverController.create({
          component: PopoutAddScheduleComponent,
          translucent: true
        });
        console.log("save schedule");
        return await popover.present();
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

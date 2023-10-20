import { Component, OnInit } from '@angular/core';
import { PopoverController, LoadingController, NavController } from '@ionic/angular';
// import { PopoutAddScheduleComponent } from './popout-add-schedule/popout-add-schedule.component';
import { Select, Store } from '@ngxs/store';
import { MessagesState, WorkoutSchedulingState } from 'src/app/states';
import { Observable, tap } from 'rxjs';
import { IProfileModel, ISearchTerms, IWorkoutScheduleModel } from 'src/app/models';
import { GetChatFriends, GetFriendsProfiles, GetWorkoutSchedules } from 'src/app/actions';
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
  @Select(MessagesState.returnFriendsProfiles) friends$: Observable<IProfileModel[]>;
  isAddSlide = false;
  friends: IProfileModel[] = [];

  constructor(private popoverController: PopoverController, 
      private store : Store, 
      private nav: NavController,
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
    this.loadFriends();
  }

  async addSchedule(){
   this.nav.navigateRoot("/addSchedule")
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
      this.isCompleted(schedule)
    )

    this.uncompletedSchedules = this.schedules.filter((schedule)=>
      this.isUncomplete(schedule)
    )

    this.inSessionSchedules = this.schedules.filter((schedule)=>
      this.inSession(schedule)
    )
  }

  onSegmentChange(event: any) {
    this.filterSchedules();
    this.selectedSegment = event.detail.value;
  }

  loadFriends() {
    this.store.dispatch(new GetFriendsProfiles());
    this.friends$.subscribe((response)=>{
      this.friends = response
    })
  }

  inSession(schedule: IWorkoutScheduleModel) {
    const completeAt = schedule.completeAt!.toDate().getTime();
    const scheduledTime = new Date(`${schedule.date}T${schedule.time}`).getTime();
    const now = new Date().getTime();

    if (now >= scheduledTime && now < completeAt) {
      return true;
    }
    return false;
  }

  isCompleted(schedule: IWorkoutScheduleModel) {
    const completeAt = schedule.completeAt!.toDate().getTime();
    const scheduledTime = new Date(`${schedule.date}T${schedule.time}`).getTime();
    const now = new Date().getTime();
    let joinStatus = schedule.joined;
    if(joinStatus && now >= completeAt ) {
      return true;
    }
    return false;
  }

  isUncomplete(schedule: IWorkoutScheduleModel) {
    const completeAt = schedule.completeAt!.toDate().getTime();
    const scheduledTime = new Date(`${schedule.date}T${schedule.time}`).getTime();
    const now = new Date().getTime();
    let joinStatus = schedule.joined;
    if(!joinStatus && (now < scheduledTime || now > completeAt) ) {
      return true;
    }
    return false;
  }
}

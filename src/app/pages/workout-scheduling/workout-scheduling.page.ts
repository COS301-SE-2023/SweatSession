import { Component, OnInit } from '@angular/core';
import { PopoverController, LoadingController } from '@ionic/angular';
import { PopoutAddScheduleComponent } from './popout-add-schedule/popout-add-schedule.component';
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
  searchTerms!: ISearchTerms;
  schedules: IWorkoutScheduleModel[]=[];
 
  @Select(WorkoutSchedulingState.returnSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;

  constructor(private popoverController: PopoverController, 
      private store : Store, private loadingCtrl: LoadingController) { 
        this.searchTerms= {
          searchQuery:"",
          showSuggestions:false,
          suggestions:[],
          filteredSuggestions:[],
          initial:true,
      }
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
      console.table(this.schedules);
    });
  }

  searchSchedule() {
    this.searchTerms.showSuggestions = false;
  }

  async Loading() {
    const loader = await this.loadingCtrl.create({
      message: 'Loading...',
      translucent: true,
    });
    await loader.present();
  }

  onSearchInput(event:any) {
    const searchText = event.target.value;
    if (searchText) {
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.schedules.filter((suggestion) =>
        suggestion.name!.toLowerCase().includes(this.searchTerms.searchQuery!.toLowerCase())
      );
    }else {
      this.searchTerms.showSuggestions = false;
    }
  }

  find(suggestion: string){
    this.Loading();
    console.log(suggestion);
    this.searchTerms.searchQuery = suggestion;
    this.searchTerms.initial = false;
    this.searchSchedule();
    this.loadingCtrl.dismiss();
  }
 
}

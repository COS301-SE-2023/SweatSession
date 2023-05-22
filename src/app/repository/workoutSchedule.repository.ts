import { Injectable } from '@angular/core';
import { IAddWorkoutSchedule, IUpdateWorkoutSchedule, IGetWorkoutSchedules, IRemoveWorkoutSchedule } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WorkoutscheduleRepository {

  constructor() { }

  async addSchedule(request: IAddWorkoutSchedule) {

  }

  async removeSchedule(request: IRemoveWorkoutSchedule) {

  }

  async editSchedule(request: IUpdateWorkoutSchedule) {

  }

  async getSchedule(request: IGetWorkoutSchedules) {
    
  }
}

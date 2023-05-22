import { Injectable } from '@angular/core';
import { IAddWorkoutSchedule,
         IGetWorkoutSchedules,
         IRemoveWorkoutSchedule,
         IUpdateWorkoutSchedule }
         from 'src/app/models';
import { WorkoutscheduleRepository } from 'src/app/repository';

@Injectable({
  providedIn: 'root'
})
export class WorkoutscheduleService {

  constructor(repository: WorkoutscheduleRepository) { }

  async addSchedule(request: IAddWorkoutSchedule) {

  }

  async removeSchedule(request: IRemoveWorkoutSchedule) {

  }

  async updateSchedule(request: IUpdateWorkoutSchedule) {

  }

  async getSchedules(request: IGetWorkoutSchedules) {
    
  }
}

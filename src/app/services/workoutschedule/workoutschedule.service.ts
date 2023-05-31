import { Injectable } from '@angular/core';
import { IAddWorkoutSchedule,
         IGetWorkoutSchedules,
         IRemoveWorkoutSchedule,
         IUpdateWorkoutSchedule }
         from 'src/app/models';
import { WorkoutscheduleRepository } from '../../repository';

@Injectable({
  providedIn: 'root'
})
export class WorkoutscheduleService {

  constructor(private repository: WorkoutscheduleRepository) { }

  async addSchedule(request: IAddWorkoutSchedule) {

  }

  async removeSchedule(request: IRemoveWorkoutSchedule) {

  }

  async updateSchedule(request: IUpdateWorkoutSchedule) {

  }

  async getSchedules(request: IGetWorkoutSchedules) {
    return this.repository.getSchedules(request);
  }
}

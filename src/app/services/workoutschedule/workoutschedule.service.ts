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
    return this.repository.addSchedule(request);
  }

  async removeSchedule(request: IRemoveWorkoutSchedule) {
    return this.repository.removeSchedule(request);
  }

  async updateSchedule(request: IUpdateWorkoutSchedule) {
    return this.repository.updateSchedule(request);
  }

  async getSchedules(request: IGetWorkoutSchedules) {
    return this.repository.getSchedules(request);
  }
}

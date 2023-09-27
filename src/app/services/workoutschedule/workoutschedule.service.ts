import { Injectable } from '@angular/core';
import { IAddSweatbuddies, IAddSweatbuddy, IAddWorkoutSchedule,
         IGetWorkoutSchedules,
         IRemoveWorkoutSchedule,
         IRequestToAdd,
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

  async addSweatBuddies(request: IAddSweatbuddies) {
    this.repository.addSweatBuddies(request);
  }

  async addSweatBuddy(request: IAddSweatbuddy) {
    this.repository.addSweatBuddy(request);
  }

  async sendAddRequest(request: IRequestToAdd) {
    this.repository.sendAddRequest(request);
  }
}

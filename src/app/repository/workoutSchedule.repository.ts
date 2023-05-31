import { Injectable } from '@angular/core';
import { IAddWorkoutSchedule, IUpdateWorkoutSchedule, IGetWorkoutSchedules, IRemoveWorkoutSchedule, IGotWorkoutSchedules } from '../models';

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

  async getSchedules(request: IGetWorkoutSchedules) {
    return await this.getMock(request);
  }

  getMock(request:IGetWorkoutSchedules){
    const results:IGotWorkoutSchedules = {
        userId: request.userId,
        schedules: [
            {
                id: "ID 1",
                name:"Schedule 1",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 2",
                name:"Schedule 2",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 3",
                name:"Schedule 3",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 4",
                name:"Schedule 4",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 5",
                name:"Schedule 5",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 6",
                name:"Schedule 6",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            }
        ]
    }
    return results;
}
}

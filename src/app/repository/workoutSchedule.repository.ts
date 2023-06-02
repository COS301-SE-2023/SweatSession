import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IAddWorkoutSchedule, 
    IUpdateWorkoutSchedule, 
    IGetWorkoutSchedules, 
    IRemoveWorkoutSchedule, 
    IGotWorkoutSchedules, 
    IAddedWorkoutSchedule} 
    from '../models';

@Injectable({
  providedIn: 'root'
})
export class WorkoutscheduleRepository {

  constructor(private firebase: AngularFirestore) { }

    //How user schedules are store....
   /**
     * collection//workout schedule {
     *  document//user id {
     *      subcollection//schedule {
     *          document//schedule is<IWorkoutSchedule> {
     *              
     *          }
     *      }
     *  }
     * }
     */

  async addSchedule(request: IAddWorkoutSchedule) {
    try {
        const docRef = await this.firebase
          .collection("WorkoutSchedule")
          .doc(request.userId)
          .collection("userSchedules")
          .add(request.schedule);
      
        const schedule = {
          id: docRef.id,
          ...request.schedule,
        };
      
        console.log('Schedule added successfully with ID:', docRef.id);
        alert('Schedule added successfully with ID:' + docRef.id);
      
        const response: IAddedWorkoutSchedule = {
          userId: request.userId,
          schedule: schedule,
          validate: true,
        };
      
        return response;
    } catch (error) {
        console.log('Error adding schedule:', error);
        alert(error);
      
        const response: IAddedWorkoutSchedule = {
          userId: request.userId,
          validate: false,
        };
      
        return response;
    }
  }

  async removeSchedule(request: IRemoveWorkoutSchedule) {

  }

  async updateSchedule(request: IUpdateWorkoutSchedule) {

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

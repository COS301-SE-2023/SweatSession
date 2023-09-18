import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IAddWorkoutSchedule, 
    IUpdateWorkoutSchedule, 
    IGetWorkoutSchedules, 
    IRemoveWorkoutSchedule, 
    IGotWorkoutSchedules, 
    IAddedWorkoutSchedule,
    IRemovedWorkoutSchedule,
    IUpdatedWorkoutSchedule,
    IWorkoutScheduleModel} 
    from '../models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutscheduleRepository {

  constructor(private firestore: AngularFirestore) { }

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

   getScheduleById(userId: string, scheduleId: string): Observable<IWorkoutScheduleModel | null> {
    const scheduleDoc = this.firestore
      .collection('WorkoutSchedule')
      .doc(userId)
      .collection('userSchedules')
      .doc<IWorkoutScheduleModel>(scheduleId);
  
    return scheduleDoc.snapshotChanges().pipe(
      map((doc) => {
        if (doc.payload.exists) {
          const schedule = {
            ...doc.payload.data() as IWorkoutScheduleModel,
            id: doc.payload.id,
          };
          return schedule;
        } else {
          return null;
        }
      })
    );
  }
  

  async addSchedule(request: IAddWorkoutSchedule) {
    try {
        const docRef = await this.firestore
          .collection("WorkoutSchedule")
          .doc(request.userId)
          .collection("userSchedules")
          .add(request.schedule);
      
        const schedule = {
          id: docRef.id,
          ...request.schedule,
        };
      
        const response: IAddedWorkoutSchedule = {
          userId: request.userId,
          schedule: schedule,
          validate: true,
        };
      
        return response;
    } catch (error) {
        // alert('Error adding schedule:'+error);
      
        const response: IAddedWorkoutSchedule = {
          userId: request.userId,
          validate: false,
        };
      
        return response;
    }
  }

  async removeSchedule(request: IRemoveWorkoutSchedule) {
    try {
        const docRef = await this.firestore
          .collection("WorkoutSchedule")
          .doc(request.userId)
          .collection("userSchedules")
          .doc(request.schedule.id)
          .delete()
          
        // console.log('Schedule deleted successfully');
        // alert('Schedule removed successfully');
      
        const response: IRemovedWorkoutSchedule = {
          userId: request.userId!,
          validate: true,
        };
      
        return response;
    } catch (error) {
        console.log('Error removing schedule:', error);
        alert(error);
      
        const response: IRemovedWorkoutSchedule = {
          userId: request.userId!,
          validate: false,
        };
      
        return response;
    }

  }

  async updateSchedule(request: IUpdateWorkoutSchedule) {
    try {
        const docRef = await this.firestore
          .collection("WorkoutSchedule")
          .doc(request.userId)
          .collection("userSchedules")
          .doc(request.schedule.id)
          .update(request.schedule)
          
        // console.log('Schedule updated successfully');
        // alert(request.schedule.id);

        const schedule = {
          ...request.schedule,
        };
      
        const response: IUpdatedWorkoutSchedule = {
          userId: request.userId,
          schedule: schedule,
          validate: true,
        };
      
        return response;
    } catch (error) {
        console.log('Error updating schedule:', error);
        // alert(error);
      
        const response: IUpdatedWorkoutSchedule = {
          userId: request.userId,
          validate: false,
        };
      
        return response;
    }
  }

  getSchedules(request: IGetWorkoutSchedules): Observable<IGotWorkoutSchedules> {
    // try {
      
      const friendsCollection = this.firestore.collection<IWorkoutScheduleModel>(
      `WorkoutSchedule/${request.userId}/userSchedules`
      );
  
    return friendsCollection.snapshotChanges().pipe(
      map((snapshot) => {
        const schedules: IWorkoutScheduleModel[] = [];
      
        snapshot.forEach(async (doc) => {
          const schedule = {
            ...doc.payload.doc.data() as IWorkoutScheduleModel,
            id: doc.payload.doc.id,
          };
      
          schedules.push(schedule);
        });
      
        return  {
          userId: request.userId,
          schedules: schedules,
        };
      
      }))
    // }catch (error) {
    //   console.log('Error fetching schedules:', error);
    //   alert(error);
    
    //   const response: IGotWorkoutSchedules = {
    //     userId: request.userId,
    //     schedules: [],
    //   };
    
    //   // return response;
    // }
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, lastValueFrom, map } from 'rxjs';
import {
  IAddSweatbuddies,
  IAddSweatbuddy,
  IAddWorkoutSchedule,
  IAddedWorkoutSchedule,
  IGetSchedule,
  IGetWorkoutSchedules,
  IGotWorkoutSchedules,
  IProfileModel,
  IRemoveWorkoutSchedule,
  IRemovedWorkoutSchedule,
  IRequestToAdd,
  IRequestToJoin,
  IScheduleRequest,
  IUpdateWorkoutSchedule,
  IUpdatedWorkoutSchedule,
  IWorkoutScheduleModel
} from '../models';
import { NotifyService } from '../services/notify/notify.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutscheduleRepository {

  constructor(private firestore: AngularFirestore, private notify: NotifyService) { }

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
        await this.notify.presentSuccessToast("Session added successfully");
        return response;
    } catch (error) {
      
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
      
        const response: IUpdatedWorkoutSchedule = {
          userId: request.userId,
          validate: false,
        };
      
        return response;
    }
  }

  getSchedules(request: IGetWorkoutSchedules): Observable<IGotWorkoutSchedules> {
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
  }

  async addSweatBuddies(request: IAddSweatbuddies) {
    try {
      console.table(request);
      let docref = this.firestore.doc<IWorkoutScheduleModel>(`WorkoutSchedule/${request.ownerId}/userSchedules/${request.scheduleId}`);
      let doc: IWorkoutScheduleModel = (await lastValueFrom(docref.get())).data()!;
      request.userIds.forEach((userId)=>{
        doc.sweatbuddiesJoinRequest?.push(userId);
      })
      docref.update({sweatbuddiesJoinRequest: doc.sweatbuddiesJoinRequest})
    } catch(error) {
      console.log(error);
    }
  }

 async getSchedule(request: IGetSchedule) {
    return (await lastValueFrom(this.firestore.doc<IWorkoutScheduleModel>(`WorkoutSchedule/${request.userId}/userSchedules/${request.scheduleId}`).get())).data()!;
  }

  async addSweatBuddy(request: IAddSweatbuddy) {
    try {
      let docref = this.firestore.doc<IWorkoutScheduleModel>(`WorkoutSchedule/${request.ownerId}/userSchedules/${request.scheduleId}`);
      let doc: IWorkoutScheduleModel = (await lastValueFrom(docref.get())).data()!;
      doc.sweatbuddies?.push(request.userId!);
      docref.update({sweatbuddies: doc.sweatbuddies})
      let schedule: IWorkoutScheduleModel =await this.getSchedule({userId: request.ownerId, scheduleId: request.scheduleId});
      this.addSchedule({userId: request.userId, schedule: schedule})
    } catch(error) {
      console.log(error);
    }
  }

  async sendAddRequest(request: IRequestToAdd) {
    try {
      const docRef =this.firestore.doc<IProfileModel>(`profiles/${request.receiverId}`)
      let doc: IProfileModel = (await lastValueFrom(docRef.get())).data()!;
      let requests: IScheduleRequest[] = [];
      doc.scheduleParticipationRequested ? requests = doc.scheduleParticipationRequested : requests = [];
      requests.push({ userId: request.scheduleId, scheduleId: request.scheduleId});
    } catch(error) {
      
    }
  }

  async requestToJoin(request: IRequestToJoin) {
    try {

    } catch(error) {
      console.log(error);
    }
  }
}

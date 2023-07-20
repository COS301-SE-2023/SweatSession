import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'; 
import { IWorkoutScheduleModel } from "../../src/app/models";
import { PointsRepository } from "../../src/app/repository/points.repository";

admin.initializeApp();

const firestore = admin.firestore();

export const checkScheduledWorkouts = functions.pubsub
  .schedule('every 1 minutes')
  .onRun(async (context) => {
    const Snapshot = await firestore.collection('WorkoutSchedule').get();
    Snapshot.forEach(async (doc)=>{
        const now = new Date();
        const scheduledWorkoutsRef = firestore.collection(`WorkoutSchedule/${doc.id}/userSchedules`);
        const snapshot = await scheduledWorkoutsRef.get();

        snapshot.forEach(async (innerDoc) => {
          const workout = innerDoc.data() as IWorkoutScheduleModel;
          const scheduledDateTime = workout.notifyAt!;


          if (scheduledDateTime <= now && workout.status !== 'completed' && !workout.notified) {
            console.log(workout.completeAt);
            console.log(now);
            // Send a notification to the user userId == doc.id
            await innerDoc.ref.update({notified: true});
            await sendNotificationToUser(workout, "You have a session in 5 minutes");

            if(workout.completeAt! <= now) {
              // Send a notification to the user userId == doc.id
              await sendNotificationToUser(workout, "Workout Session Completed");//changed from schedule to Workout Session
              await innerDoc.ref.update({ status: 'completed' });
            }
          }
        });
    })
       
    return null;
  });

async function sendNotificationToUser(schedule: IWorkoutScheduleModel, message: string) {
  //implement the notification logic here....
}

/**
 * import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IWorkoutScheduleModel } from 'path/to/your/interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutCollection: AngularFirestoreCollection<IWorkoutScheduleModel>;

  constructor(private firestore: AngularFirestore) {
    this.workoutCollection = this.firestore.collection<IWorkoutScheduleModel>('workoutSchedules');
  }

  trackScheduledWorkouts(): Observable<IWorkoutScheduleModel[]> {
    const now = new Date();

    return this.workoutCollection.valueChanges().pipe(
      map(workouts => workouts.filter(workout => {
        const scheduledDateTime = new Date(`${workout.date}T${workout.time}`);
        return scheduledDateTime <= now && workout.Status !== 'completed';
      }))
    );
  }

  updateWorkoutStatus(workoutId: string): Promise<void> {
    return this.workoutCollection.doc(workoutId).update({ Status: 'completed' });
  }
}


import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'path/to/workout.service';
import { IWorkoutScheduleModel } from 'path/to/your/interface';

@Component({
  selector: 'app-workout-tracking',
  templateUrl: './workout-tracking.component.html',
  styleUrls: ['./workout-tracking.component.css']
})
export class WorkoutTrackingComponent implements OnInit {
  scheduledWorkouts: IWorkoutScheduleModel[];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.trackScheduledWorkouts().subscribe(workouts => {
      this.scheduledWorkouts = workouts;
      this.processScheduledWorkouts();
    });
  }

  processScheduledWorkouts(): void {
    for (const workout of this.scheduledWorkouts) {
      this.workoutService.updateWorkoutStatus(workout.id)
        .then(() => {
          // Send a notification to the user
          this.sendNotificationToUser(workout.id);
        })
        .catch(error => {
          console.error('Failed to update workout status:', error);
        });
    }
  }

  sendNotificationToUser(workoutId: string): void {
    // Implement the logic to send a notification to the user
    // You can use a messaging service like Firebase Cloud Messaging (FCM)
    // to send push notifications to the user's device.
  }
}


 */

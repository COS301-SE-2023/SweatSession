import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Exercise } from '../../models/exercise.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private firestore: AngularFirestore) {}

  addExercise(exercise: Exercise) {
    return this.firestore.collection('exercises').add(exercise);
  }

  
  async addExerciseWithUniqueId(exercise: Exercise): Promise<Exercise> {
    const uniqueId = this.firestore.createId();
    exercise.id = uniqueId;
    console.log('Adding exercise:', exercise);
    await this.firestore.collection('exercises').doc(uniqueId).set(exercise);
    return exercise;
  }
  

  getExerciseByScheduleId(scheduleId: string) {
    return this.firestore.collection('exercises', ref => ref.where('scheduleId', '==', scheduleId)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Exercise;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  updateExercise(exerciseId: string, exercise: Exercise) {
    console.log('Updating exercise:', exerciseId, exercise);
    return this.firestore.collection('exercises').doc(exerciseId).update(exercise);
  }  

  async deleteExerciseFromDatabase(exerciseId: string) {
    console.log('Deleting exercise:', exerciseId);
    await this.firestore.collection('exercises').doc(exerciseId).delete();
  }
}

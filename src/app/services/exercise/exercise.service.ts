import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Exercise } from '../../models/exercise.model';
import { map } from 'rxjs/operators';
import { BadgesRepository } from 'src/app/repository';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  currUserId: string | undefined | null;
  constructor(private firestore: AngularFirestore, private badgesRepository: BadgesRepository) { }

  addExercise(exercise: Exercise) {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId!=undefined){
      sessionStorage.setItem('currUserId', this.currUserId);
    }else{
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    if (exercise.name.toLowerCase().includes("stretch") && this.currUserId!=undefined) {
      this.badgesRepository.stretchingStarBadge(this.currUserId);
    }
    return this.firestore.collection('exercises').add(exercise);
  }


  async addExerciseWithUniqueId(exercise: Exercise): Promise<Exercise> {
    const uniqueId = this.firestore.createId();
    exercise.id = uniqueId;
    console.log('Adding exercise:', exercise);
    await this.firestore.collection('exercises').doc(uniqueId).set(exercise);
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId!=undefined){
      sessionStorage.setItem('currUserId', this.currUserId);
    }else{
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    if (exercise.name.toLowerCase().includes("stretch") && this.currUserId!=undefined) {
      this.badgesRepository.stretchingStarBadge(this.currUserId);
    }
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

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Exercise } from '../../models/exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private firestore: AngularFirestore) {}

  addExercise(exercise: Exercise) {
    return this.firestore.collection('exercises').add(exercise);
  }
}

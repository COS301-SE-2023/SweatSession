import { Injectable } from "@angular/core";
import { IPersonalBest } from "../models";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { getAuth } from "@angular/fire/auth";
import 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { BadgesRepository } from "./badges.repository";
import { Firestore, collection } from '@angular/fire/firestore';
import { getDocs } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class PersonalbestRepository {
  currUserId: string | undefined = undefined;

  constructor(private firestore: AngularFirestore, private badgesRepository: BadgesRepository, private angularFireFirestore: Firestore) { }

  addPersonalBest(personalBest: IPersonalBest) {
    // Create a reference to the exercise document
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;

    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    }
    else {
      this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }



    const progress: IPersonalBest =
    {
      id: personalBest.id,
      exercise: personalBest.exercise,
      weight: personalBest.weight,
      reps: personalBest.reps,
      date: personalBest.date,
      location: personalBest.location,
      notes: personalBest.notes
    };

    const exerciseRef = this.firestore
      .collection('Personalbests')
      .doc(this.currUserId)
      .collection('exercises')
      .doc(progress.exercise)
      .collection('exerciseEntries')
      .doc(progress.id);

    console.table(progress);

    if (personalBest.exercise == "Bench Press") {
      // alert("Bench Press")
      const personalBestHistoryRef = collection(this.angularFireFirestore, `Personalbests/${this.currUserId}/exercises/Bench Press/exerciseEntries`);
      const weights:any = [];
      getDocs(personalBestHistoryRef).then((docs) => {
        docs.forEach(document => {
          // alert("In Promise")
          console.log(document.data());
          console.log(document.id);
          const data = document.data() as IPersonalBest;
          weights.push(data.weight);
          alert(data.weight)
        })
      });
      // alert(personalBest.weight)
      alert(Math.max(weights))
      if (personalBest.weight! > Math.max(weights)) {
        // alert("Bench Press Record")
        this.badgesRepository.addBadge(this.currUserId!, 3);//Record Breaker Badge
      }
    }

    // Add the personal best to the exercise document
    return exerciseRef.set({
      id: progress.id,
      exercise: progress.exercise,
      weight: progress.weight,
      reps: progress.reps,
      date: progress.date,
      location: progress.location,
      notes: progress.notes
    });

  }

  deletePersonalbest(personalBest: IPersonalBest) {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;

    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    }
    else {
      this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }

    const exerciseRef = this.firestore
      .collection('Personalbests')
      .doc(this.currUserId)
      .collection('exercises')
      .doc(personalBest.exercise)
      .collection('exerciseEntries')
      .doc(personalBest.id);

    return exerciseRef.delete();
  }

  getExercisesByName(name: string): Observable<IPersonalBest[]> {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;

    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }

    const exerciseRef = this.firestore
      .collection('Personalbests')
      .doc(this.currUserId)
      .collection('exercises')
      .doc(name)
      .collection('exerciseEntries');

    return exerciseRef.valueChanges();
  }






}
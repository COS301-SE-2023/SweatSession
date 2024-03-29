import { Injectable } from "@angular/core";
import { getAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Firestore, collection } from '@angular/fire/firestore';
import 'firebase/firestore';
import { getDocs } from "firebase/firestore";
import { Observable } from "rxjs";
import { IPersonalBest } from "../models";
import { BadgesRepository } from "./badges.repository";

@Injectable({
  providedIn: 'root'
})
export class PersonalbestRepository {
  currUserId: string | undefined = undefined;
  weights: any = [];
  maxWeight: number;

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
      this.maxWeight = 0;
      // alert("Bench Press")
      const personalBestHistoryRef = collection(this.angularFireFirestore, `Personalbests/${this.currUserId}/exercises/Bench Press/exerciseEntries`);
      // weights = [];
      getDocs(personalBestHistoryRef).then((docs) => {
        docs.forEach(document => {
          // alert("In Promise")
          console.log(document.data());
          console.log(document.id);
          const data = document.data() as IPersonalBest;
          this.weights.push(data.weight);
          if (data.weight! > this.maxWeight) {
            this.maxWeight = data.weight!;
          }
          console.log("weight")
          console.log(data.weight)
        })
        // alert(personalBest.weight)
        console.log("Weights")
        console.log(this.weights)
        console.log("max Weight")
        console.log(Math.max(this.weights))
        console.log("max Weight 2")
        console.log(this.maxWeight)
        console.log("pb Weight")
        console.log(personalBest.weight)
        if (personalBest.weight! > this.maxWeight) {
          // alert("Bench Press Record")
          this.badgesRepository.addBadge(this.currUserId!, 3);//Record Breaker Badge
        }
        this.weights = [];
        this.maxWeight = 0;
      });
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
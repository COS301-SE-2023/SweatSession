import { Injectable } from "@angular/core";
import { IPersonalBest } from "../models";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {getAuth} from "@angular/fire/auth";
import 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonalbestRepository
{
    currUserId: string | undefined = undefined;
    
    constructor(private firestore: AngularFirestore) { }

    addPersonalBest(personalBest: IPersonalBest) {
        // Create a reference to the exercise document
        const auth = getAuth();
        this.currUserId = auth.currentUser?.uid;

        if (this.currUserId!=undefined)
        {
        sessionStorage.setItem('currUserId', this.currUserId);
        }
        else
        {
        this.currUserId = sessionStorage.getItem('currUserId') ?? "";
        }

        

        const progress : IPersonalBest = 
            {
                id : personalBest.id,
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

          if (this.currUserId!=undefined)
          {
          sessionStorage.setItem('currUserId', this.currUserId);
          }
          else
          {
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
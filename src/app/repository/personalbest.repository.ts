import { Injectable } from "@angular/core";
import { IPersonalBest } from "../models";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {getAuth} from "@angular/fire/auth";
import 'firebase/firestore';

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
                repetitions: personalBest.repetitions,
                date: personalBest.date,
                notes: personalBest.notes
            };

        var exerciseNum = 1;

        if(progress.exercise == "Bench Press")
        {
            exerciseNum = 1;
        }else if(progress.exercise == "Squat")
        {
            exerciseNum = 2;
        }else if(progress.exercise == "Deadlift")
        {
            exerciseNum = 3;
        }else if(progress.exercise == "Overhead Press")
        {
            exerciseNum = 4;    
        }else if(progress.exercise == "Barbell Row")
        {
            exerciseNum = 5;
        }

        const exerciseRef = this.firestore
        .collection('Personalbests')
        .doc(this.currUserId)
        .collection('exercises')
        .doc("1");

        console.table(progress);
        
        // Add the personal best to the exercise document
        return exerciseRef.set({
          exerciseName: personalBest.exercise,
          progress: progress,
        }
        );

      }
}
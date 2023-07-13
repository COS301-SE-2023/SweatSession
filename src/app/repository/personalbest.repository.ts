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

        // var exerciseNum = "n/a";

        // if(progress.exercise == "Bench Press")
        // {
        //     exerciseNum = "BenchPress";
        // }else if(progress.exercise == "Squat")
        // {
        //     exerciseNum = "Squat";
        // }else if(progress.exercise == "Deadlift")
        // {
        //     exerciseNum = "Deadlift";
        // }else if(progress.exercise == "Overhead Press")
        // {
        //     exerciseNum = "Overhead Press";    
        // }else if(progress.exercise == "Barbell Row")
        // {
        //     exerciseNum = 5;
        // }

        const exerciseRef = this.firestore
        .collection('Personalbests')
        .doc(this.currUserId)
        .collection('exercises')
        .doc(progress.exercise)
        .collection('exerciseEntries');

        console.table(progress);
        
        // Add the personal best to the exercise document
        return exerciseRef.add({
          progress: progress
        }
        );

      }
}
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

        const exerciseRef = this.firestore
        .collection('Personalbests')
        .doc(this.currUserId)
        .collection('exercises')
        .doc("1");

        const progress : IPersonalBest[] = [
            {
                id : personalBest.id,
                exercise: personalBest.exercise,
                weight: personalBest.weight,
                matrix: personalBest.matrix,
                repetitions: personalBest.repetitions,
                date: personalBest.date,
                notes: personalBest.notes
            },
        ];
        
    
        // Add the personal best to the exercise document
        return exerciseRef.set({
          exerciseName: personalBest.exercise,
          metric: personalBest.matrix,
          progress: progress,
        }
        );

      }
}
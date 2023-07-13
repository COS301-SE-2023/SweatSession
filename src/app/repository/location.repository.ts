import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFirestore, QuerySnapshot} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BadgesRepository } from './badges.repository';
import { OtheruserRepository } from './otheruser.repository';
import { getAuth } from '@angular/fire/auth';
import { Timestamp } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class LocationRepository {
    currUserId: string | undefined | null;
  constructor(private firestore: AngularFirestore) { }

  async addGymSession(placeId: string, date: string, time: string, completedAt: Timestamp){
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId!=undefined){
      sessionStorage.setItem('currUserId', this.currUserId);
    }else{
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    
    const locationsRef = this.firestore.collection('locations').doc(placeId);
    const fieldValue = firebase.firestore.FieldValue;
    
        const docSnapshot = await locationsRef.get().toPromise(); // Convert Observable to Promise
    
        if (docSnapshot && docSnapshot.exists) {
            const data = docSnapshot.data() as { [key: string]: any }; // Typecast data as an object with any keys
            const currentWorkoutSessionsAttended = data?.['workoutSessionsAttended'] || 0;
            const newWorkoutSessionsAttended = currentWorkoutSessionsAttended + 1;
    
            let updatedFields = {};
    
            if (newWorkoutSessionsAttended % 3 === 0) {
                updatedFields = {
                    userPoints: fieldValue.increment(75),
                    workoutSessionsAttended: fieldValue.increment(1)
                };
            } else {
                updatedFields = {
                    workoutSessionsAttended: fieldValue.increment(1)
                };
            }
    
            return locationsRef.update(updatedFields);
        } else {
            // Handle the case when the document does not exist
            console.log("Document does not exist");
            return null;
        }
  }
}
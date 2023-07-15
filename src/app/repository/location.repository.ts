import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFirestore, QuerySnapshot} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BadgesRepository } from './badges.repository';
import { OtheruserRepository } from './otheruser.repository';
import { getAuth } from '@angular/fire/auth';
import { Timestamp } from "firebase/firestore";
import { ProfileService } from '../services';
import { getLocaleDirection, Time } from '@angular/common';
import { ILocation, LocationGymSession } from '../models/location.model';
import { doc, docData, Firestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class LocationRepository {
    currUserId: string | undefined | null;
  constructor(private angularFirestore: AngularFirestore, private profileService: ProfileService, private firestore: Firestore) { }

  async addGymSession(placeId: string, sessionDate: Date, time: Time, completedAt: Timestamp){
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId!=undefined){
      sessionStorage.setItem('currUserId', this.currUserId);
    }else{
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    // const profileDocRef = this.firestore.collection('profiles').doc(placeId);
    const userProfile = await this.profileService.getProfile({userId: this.currUserId!}).toPromise();
    const displayName = userProfile?.profile.displayName;
    const profilePhoto = userProfile?.profile.profileURL;


    const userLocationsGymSessionRef = this.angularFirestore.collection('locations').doc(placeId).collection(this.currUserId!).doc();
    const newGymSessionDoc: LocationGymSession = {
        friendDisplayName: displayName,
        startTime: time,
        endTime: completedAt,
        date: sessionDate,
        profilePhoto: profilePhoto
    }
    
    userLocationsGymSessionRef.set(newGymSessionDoc)
            .then((docRef) => {
                console.log('Location: Document created successfully with ID:', docRef);
            })
            .catch((error) => {
                console.error('Location: Error creating document:', error);
            });

    // const fieldValue = firebase.firestore.FieldValue;
    
    //     const docSnapshot = await userLocationsGymSessionRef.get().toPromise(); // Convert Observable to Promise
    
    //     if (docSnapshot && docSnapshot.exists) {
    //         const data = docSnapshot.data() as { [key: string]: any }; // Typecast data as an object with any keys
    //         const currentWorkoutSessionsAttended = data?.['workoutSessionsAttended'] || 0;
    //         const newWorkoutSessionsAttended = currentWorkoutSessionsAttended + 1;
    
    //         let updatedFields = {};
    
    //         if (newWorkoutSessionsAttended % 3 === 0) {
    //             updatedFields = {
    //                 userPoints: fieldValue.increment(75),
    //                 workoutSessionsAttended: fieldValue.increment(1)
    //             };
    //         } else {
    //             updatedFields = {
    //                 workoutSessionsAttended: fieldValue.increment(1)
    //             };
    //         }
    
    //         return userLocationsGymSessionRef.update(updatedFields);
    //     } else {
    //         // Handle the case when the document does not exist
    //         console.log("Document does not exist");
    //         return null;
    //     }
  }

  async getLocation(placeId: string){
      const auth = getAuth();
      this.currUserId = auth.currentUser?.uid;
      if (this.currUserId!=undefined){
        sessionStorage.setItem('currUserId', this.currUserId);
      }else{
        this.currUserId = sessionStorage.getItem('currUserId');
      }
      // alert(AuthState.currUserId);
      // alert("IN badges.api.ts");
      // alert(currUserId);
      const docRef = doc(
        this.firestore,
        `locations/${placeId}`
      ).withConverter<ILocation>({       //convert our firestore data into the IBadges type
        fromFirestore: (snapshot) => {
          return (snapshot.data() as ILocation);
        },
        toFirestore: (it: ILocation) => it,
      });
      return docData(docRef, { idField: 'id' });
  }
}
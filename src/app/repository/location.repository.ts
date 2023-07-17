import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFirestore, DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BadgesRepository } from './badges.repository';
import { OtheruserRepository } from './otheruser.repository';
import { getAuth } from '@angular/fire/auth';
import { getDocs, Timestamp } from "firebase/firestore";
import { ProfileService } from '../services';
import { getLocaleDirection, Time } from '@angular/common';
import { ILocation, LocationGymSession } from '../models/location.model';
import { collection, doc, docData, Firestore, getDoc } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class LocationRepository {
  currUserId: string | undefined | null;
  document$: any
  constructor(private angularFirestore: AngularFirestore, private profileService: ProfileService, private firestore: Firestore) { }

  async addGymSession(placeId: string, sessionDate: Date, time: Time, completedAt: Timestamp) {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    // const profileDocRef = this.firestore.collection('profiles').doc(placeId);
    const userProfile = await this.profileService.getProfile({ userId: this.currUserId! }).toPromise();
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

  async getLocation(placeId: string, friendIds: string[]) {
    // const auth = getAuth();
    // this.currUserId = auth.currentUser?.uid;
    // if (this.currUserId != undefined) {
    //   sessionStorage.setItem('currUserId', this.currUserId);
    // } else {
    //   this.currUserId = sessionStorage.getItem('currUserId');
    // }
    // alert(AuthState.currUserId);
    // alert("IN badges.api.ts");
    // alert(currUserId);
    // const docRef = doc(
    //   this.firestore,
    //   `locations/${placeId}`
    // ).withConverter<ILocation>({       //convert our firestore data into the IBadges type
    //   fromFirestore: (snapshot) => {
    //     console.log(snapshot)
    //     console.log(snapshot.data())
    //     return (snapshot.data() as ILocation);
    //   },
    //   toFirestore: (it: ILocation) => it,
    // });
    // // console.log(`locations/${placeId}`)
    // return docData(docRef, { idField: 'id' });

    //   const docRef = this.angularFirestore.doc(`locations/ChIJF7oBeAFhlR4RcP7sFSzacP8/zmsJTJ4ggsWA22cicg3O1KO7tsj1/0LoknPE4WO37SM5g0UJ6`);
    //   this.document$ = docRef.snapshotChanges();

    // this.document$.subscribe((snapshot: DocumentSnapshot<any>) => {
    //   const documentData = snapshot.data;
    //   console.log('Document Data:', documentData);

    //   // // Retrieve and log all subcollections
    //   // this.retrieveSubcollections(snapshot.ref);
    // });
    // const docRef = doc(this.firestore, "locations", placeId);
    // try {
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     console.log(docSnap.data());
    //   } else {
    //     console.log("Document does not exist")
    //   }

    // } catch (error) {
    //   console.log(error)
    // }

    // console.log(friendIds)
    const locationGymSessions: LocationGymSession[][]=[];
    friendIds.forEach(async id=>{
      console.log(placeId);
      const colRef = collection(this.firestore, `locations/${placeId}`, id);
      const docs = await getDocs(colRef);
      const friendGymSessions:LocationGymSession[]=[];
      docs.forEach(document=>{
        console.log(document.data());
        console.log(document.id);
        friendGymSessions.push(document.data() as LocationGymSession);
      })
      locationGymSessions.push(friendGymSessions);
    })
    return locationGymSessions;
  }

  // private retrieveSubcollections(ref: QueryDocumentSnapshot<any> | undefined): void {
  //   if (!ref) return;

  //   ref.firestore.listCollections({ parent: ref.ref }).subscribe((collections) => {
  //     collections.forEach((collection) => {
  //       collection.get().subscribe((snapshot) => {
  //         const subcollectionData = snapshot.docs.map((doc) => doc.data());
  //         console.log(`Subcollection '${collection.id}' Data:`, subcollectionData);
  //       });
  //     });
  //   });
  // }
}
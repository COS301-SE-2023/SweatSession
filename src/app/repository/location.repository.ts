import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection } from '@angular/fire/firestore';
import { Timestamp, getDocs } from "firebase/firestore";
import { LocationGymSession } from '../models/location.model';
import { ProfileService } from '../services';



@Injectable({
  providedIn: 'root'
})
export class LocationRepository {
  currUserId: string | undefined | null;
  document$: any
  constructor(private angularFirestore: AngularFirestore, private profileService: ProfileService, private firestore: Firestore) { }

  async addGymSession(placeId: string, sessionDate: Date, time: Time, completedAt: Timestamp, wName: string, gymName: string) {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    // this.currUserId = "TestUserID1234567890"
    // console.log(auth);
    // console.log(auth.currentUser);
    // const profileDocRef = this.firestore.collection('profiles').doc(placeId);
    const userProfile = await this.profileService.getProfile({ userId: this.currUserId! }).toPromise();
    const displayName = userProfile?.profile.displayName;
    const profilePhoto = userProfile?.profile.profileURL;
    console.log(this.currUserId);

    const userLocationsGymSessionRef = this.angularFirestore.collection('locations').doc(placeId).collection(this.currUserId!).doc();
    const newGymSessionDoc: LocationGymSession = {
      friendDisplayName: displayName,
      startTime: time,
      endTime: completedAt,
      date: sessionDate,
      profilePhoto: profilePhoto,
      workoutName: wName,
    }

    userLocationsGymSessionRef.set(newGymSessionDoc)
      .then((docRef) => {
        console.log('Location: Document created successfully with ID:', docRef);
      })
      .catch((error) => {
        console.error('Location: Error creating document:', error);
      });
    return newGymSessionDoc;
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
    // if (placeId == "ChIJ4-tknf5glR4RGm5xRwH54ds") {
    //   console.log("friendIds location repository")
    //   console.log(friendIds)
    // }
    const locationGymSessions: LocationGymSession[][] = [];
    for (let i = 0; i < friendIds.length; i++) {
      const id = friendIds[i];
      console.log(placeId);
      const colRef = collection(this.firestore, `locations/${placeId}`, id);
      const docs = await getDocs(colRef);
      const friendGymSessions: LocationGymSession[] = [];
      docs.forEach(document => {
        console.log(document.data());
        console.log(document.id);
        const data = document.data() as LocationGymSession;
        const startDateTime = new Date(data.date + " " + data.startTime);
        const currentTime = Timestamp.now().toDate();
        if (startDateTime > currentTime) {
          friendGymSessions.push(data);
        }
      })
      if (friendGymSessions.length > 0) {
        locationGymSessions.push(friendGymSessions);
        console.log("friendGymSessions")
        console.log(friendGymSessions)
      }
    }
    console.log(locationGymSessions)
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
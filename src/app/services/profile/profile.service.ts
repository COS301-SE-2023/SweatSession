// import { Injectable } from '@angular/core';
// import { config } from 'firebase-functions/v1';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {

//   private firestore: any;

//   constructor() 
//   {
//     const firebaseConfig = 
//     {
//       // i'll add the config here later
//       // apiKey: "AIzaSyB-5Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6",
//       // authDomain: "ionicfirebaseauth-1a2b3c.firebaseapp.com",
//       // databaseURL: "https://ionicfirebaseauth-1a2b3c.firebaseio.com",
//       // projectId: "ionicfirebaseauth-1a2b3c",
//       // storageBucket: "ionicfirebaseauth-1a2b3c.appspot.com",
//       // messagingSenderId: "1234567890",
//       // appId: "1:1234567890:web:1234567890"
      
//     };
//     const app = initializeApp(firebaseConfig);
//     this.firestore = getFirestore(app);
//     }

//     async getUserData(userId: string) {
//       const userRef = doc(collection(this.firestore, 'profiles'), userId);
//       const userSnapshot = await getDoc(userRef);
  
//       if (userSnapshot.exists()) {
//         const userData = userSnapshot.data();
//         return userData;
//       } else {
//         throw new Error('User not found');
//       }
//     }
// }

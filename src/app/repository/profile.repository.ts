// import { Injectable } from '@angular/core';
// import { IUpdateProfile, IGetProfile } from '../models';
// import { IProfileModel } from '../models';
// import { Store } from '@ngxs/store';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileRepository {

//   constructor(private store: Store) { }

//   async getProfile(request: IGetProfile)
//   {
//     //get the profile from the store


//   }
  
//   async updateProfile(request: IUpdateProfile)
//   {
//     //get the profile from the store
//   }
//   // async updateProfile(profile: IProfile) {
//   //   // Remove password field if present
//   //   delete profile.accountDetails?.password;
//   //   return await admin
//   //     .firestore()
//   //     .collection('profiles')
//   //     .doc(profile.userId)
//   //     .set(profile, { merge: true });
//   // }
// }
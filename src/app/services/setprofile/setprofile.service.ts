// import { Injectable } from '@angular/core';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import { environment } from 'src/environments/environment';
// import * as admin from 'firebase-admin';
// import { firestore } from 'firebase-functions/v1';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   private firestore: firebase.firestore.Firestore;

//   // firestore = admin.firestore();
//   constructor() {
//     firebase.initializeApp(environment.firebase);
//     this.firestore  = firebase.firestore();
//   }

//   getUserProfile(userId: string): Promise<any> {
//     return this.firestore.collection('profiles').doc(userId).get()
//       .then((doc: { exists: any; data: () => any; }) => {
//         if (doc.exists) {
//           return doc.data();
//         } else {
//           throw new Error('User profile not found');
//         }
//       })
//       .catch((error: any) => {
//         throw error;
//       });
//   }
// }
import { Injectable } from '@angular/core';
import 'firebase/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGetProfile, IGotProfile, IProfileModel } from 'src/app/models';
import { ProfileRepository } from 'src/app/repository/profile.repository';


@Injectable({
  providedIn: 'root'
})
export class SetProfileService {

  constructor(private repository: ProfileRepository) { }

  getProfile(prof: IGetProfile): Observable<IGotProfile> {
    return this.repository.getProfile(prof).pipe(
      map((profile: IProfileModel | undefined) => {
        if (profile) {
          const gotProfile: IGotProfile = {
            profile: {
              userId: profile.userId,
              name: profile.name,
              displayName: profile.displayName,
              email: profile.email,
              bio: profile.bio,
              phoneNumber: profile.phoneNumber,
              profileURL: profile.profileURL,
              height: profile.height,
              weight: profile.weight,

            }
          };

          return gotProfile;
        } else {
          const notFoundProfile: IGotProfile = {
            profile: {
              userId: 'undefinedID',
              bio: 'undefinedbio',
              email: 'undefinedemail',
              name: 'undefinedname',
              phoneNumber: 'undefinedphone',
              profileURL: 'undefinedURL' ,
              height: 'undefinedheight',
              weight: 'undefinedweight',
              displayName: 'undefineddisplayName',
            }
          };
          return notFoundProfile;
        }
      })
    );
  }

  updateProfile(IupdateP: IProfileModel)
  {
    this.repository.updateProfile(IupdateP).then((res) => {
      console.log('Update Successful');
    }
    ).catch((error) => {
      console.log('Update Failed');
    }
    );
  }
  gethealthdata(userId: string | null | undefined) {
   return this.repository.gethealthdata(userId);
  }
}




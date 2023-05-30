import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { environment } from 'src/environments/environment';
import { firestore } from 'firebase-functions/v1';
import { ProfileRepository } from 'src/app/repository/profile.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProfileModel , IGetProfile, IGotProfile,} from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private repository: ProfileRepository) { }

  getProfile(prof: IGetProfile): Observable<IGotProfile> {
    return this.repository.getProfile(prof).pipe(
      map((profile: IProfileModel | undefined) => {
        if (profile) {
          const gotProfile: IGotProfile = {
            profile: {
              UserId: profile.UserId,
              bio: profile.bio,
              email: profile.email,
              name: profile.name,
              phoneNumber: profile.phoneNumber,
              profileURL: profile.profileURL  
            }
          };
          return gotProfile;
        } else {
          const notFoundProfile: IGotProfile = {
            profile: {
              UserId: 'undefined',
              bio: 'undefined',
              email: 'undefined',
              name: 'undefined',
              phoneNumber: 'undefined',
              profileURL: 'undefined'  
            }
          };
          return notFoundProfile;
        }
      })
    );
  }
}





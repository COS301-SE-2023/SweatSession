import { Injectable } from '@angular/core';
import 'firebase/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGetProfile, IGotProfile, IProfileModel, } from 'src/app/models';
import { ProfileRepository } from 'src/app/repository/profile.repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private repository: ProfileRepository) { }

  addProfile(profile: IProfileModel): Observable<any> { 
    return this.repository.addProfile(profile);
  }

  getProfile(prof: IGetProfile): Observable<IGotProfile> {
    return this.repository.getProfile(prof).pipe(
      map((profile: IProfileModel | undefined) => {
        if (profile) {
          const gotProfile: IGotProfile = {
            profile: {
              userId: profile.userId,
              displayName: profile.displayName,
              name: profile.name,
              bio: profile.bio,
              email: profile.email,
              phoneNumber: profile.phoneNumber,
              height: profile.height,
              weight: profile.weight,
              profileURL: profile.profileURL,
              scheduleParticipationRequested: [],
            }
          };
          return gotProfile;
        } else {
          const notFoundProfile: IGotProfile = {
            profile: {
              userId: 'undefined',
              displayName: 'undefined',
              name: 'undefined',
              bio: 'undefined',
              email: 'undefined',
              phoneNumber: 'undefined',
              height: '0',
              weight: '0',
              profileURL: 'undefined',
              scheduleParticipationRequested: []
            }
          };
          return notFoundProfile;
        }
      })
    );
  }

  async getUser(userId: string) {
    return this.repository.getUser(userId);
  }

  async getUserProfilesRanked() {
    return this.repository.getUserProfilesRanked();
  }
}




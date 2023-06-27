import { Injectable } from '@angular/core';
import { IProfileModel } from 'src/app/models';
import { OtheruserRepository } from 'src/app/repository/otheruser.repository';

@Injectable({
  providedIn: 'root'
})
export class OtheruserService {

  constructor(private repository: OtheruserRepository) { }

  async getProfile(request: IProfileModel) {
    return this.repository.getProfile(request);
  }

  async getProfiles() {
    return this.repository.getProfiles();
  }
}

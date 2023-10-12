import { Injectable } from '@angular/core';
import { GroupRepository } from '../../repository';import { IAddAmin, IEditGroup } from 'src/app/models';
;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private repository:GroupRepository) { }

  async getGroup(groupId: string) {
    return this.repository.getGroup(groupId);
  }

  async addAdmin(request: IAddAmin) {
    return this.repository.addAdmin(request);
  }

  async editGroupProfile(request: IEditGroup) {
    return this.repository.editGroup(request);
  }
}
import { Injectable } from '@angular/core';
import { GroupRepository } from '../../repository';;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private repository:GroupRepository) { }

  async getGroup(groupId: string) {
    return this.repository.getGroup(groupId);
  }
}
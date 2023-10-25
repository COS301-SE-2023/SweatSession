import { Injectable } from '@angular/core';
import { IAddFriend, IFriendRequest, IGetFriends, IRemoveFriend } from 'src/app/models';
import { FriendsRepository } from '../../repository';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private repository:FriendsRepository) { }

  async getFriends(request: IGetFriends){
    return this.repository.getFriends(request);
  }

  async addFriend(request: IAddFriend){
    return this.repository.addFriend(request);
  }

  async removeFriend(request: IRemoveFriend){
    return this.repository.removeFriend(request);
  }

  async createFriendRequest(request: IFriendRequest) {
    return this.repository.createFriendRequest(request);
  }

  async removeFriendRequest(request: IFriendRequest) {
    return this.repository.removeFriendRequest(request);
  }
}
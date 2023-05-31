import { Injectable } from '@angular/core';
import { FriendsRepository } from '../../repository';
import { IGetFriends, IAddFriend, IRemoveFriend } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private repository:FriendsRepository) { }

  async getFriends(request: IGetFriends){
    return this.repository.getFriends(request);
  }

  async addFriend(request: IAddFriend){

  }

  async removeFriend(request: IRemoveFriend){
    
  }
}
  
import { Injectable } from '@angular/core';
import { FriendsRepository } from '../../repository';
import { IGetFriends, IAddFriend, IRemoveFriend } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(repository:FriendsRepository) { }

  async getFriends(request: IGetFriends){

  }

  async addFriend(request: IAddFriend){

  }

  async removeFriend(request: IRemoveFriend){
    
  }
}
  
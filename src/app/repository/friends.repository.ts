import { Injectable } from '@angular/core';
import { IAddFriend, IGetFriends, IRemoveFriend } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepository {

  constructor() { }

  async getFriends(request: IGetFriends){
    
  }

  async addFriend(request: IAddFriend){

  }

  async removeFriend(request: IRemoveFriend){
    
  }
}
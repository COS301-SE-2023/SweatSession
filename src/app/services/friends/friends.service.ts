import { Injectable } from '@angular/core';
import { FriendsRepository } from '../../repository';
import { IGetFriends, IAddFriend, IRemoveFriend, IGotFriends } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private repository:FriendsRepository) { }

  async getFriends(request: IGetFriends){
    // const data = (await this.repository.getFriends(request)).data;
    // const response: IGotFriends={
    //   friends: data
    // }
    // return response;
    // //return this.repository.getFriends(request);
  }

  async addFriend(request: IAddFriend){
    return this.repository.addFriend(request);
  }

  async removeFriend(request: IRemoveFriend){
    return this.repository.removeFriend(request);
  }
}
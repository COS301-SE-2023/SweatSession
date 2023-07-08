import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { FriendsRepository } from '../../repository';
// import { IGetFriends, IAddFriend, IRemoveFriend, IGotFriends } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpClient: HttpClient) { }//private repository:FriendsRepository
  searchNearbyGyms(currLatitude: Number, currLongitude:Number, maxDistance:any, MAPS_API_KEY:string) {
    // const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currLatitude},${currLongitude}&radius=${maxDistance*1000}&type=gym&key=${MAPS_API_KEY}`;
    // const headers = new HttpHeaders()
    // .set('X-Requested-With', 'XMLHttpRequest')
    // or: .set('X-Requested-With', 'XMLHttpRequest');

  // return this.httpClient.get(apiUrl);
  }
}
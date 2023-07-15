import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationsService } from 'src/app/services/location/location.services';
import { getFunctions, httpsCallable } from '@angular/fire/functions';
import { FriendsService } from 'src/app/services';
import { getAuth, user } from '@angular/fire/auth';
import { FriendsRepository } from 'src/app/repository';
import { FriendsState } from 'src/app/states';
import { Select, Store } from '@ngxs/store';
import { IFriendsModel } from 'src/app/models';
import { GetFriendsAction } from 'src/app/actions';

@Component({
   selector: 'gymsearch',
   templateUrl: './gymsearch.component.html',
   styleUrls: ['./gymsearch.component.scss'],
})
export class GymsearchComponent implements OnInit {
   currUserId: string | undefined | null;
   constructor(private store: Store, private modalController: ModalController, private geolocation: Geolocation, private httpClient: HttpClient, private locationService: LocationsService, private friendsRepository: FriendsRepository, private friendsState: FriendsState) {
      this.data.filter(item => item.name.includes(''));
   }

   @Select(FriendsState.returnFriends) friends$!: Observable<IFriendsModel[]>;
   searchTerm: string | undefined;
   filteredData$: Observable<any[]> = of([]);
   // unfilteredData$: any[] = [];
   private searchTerm$ = new Subject<string>();
   maxDistance: number = 15;//default in kilometers
   currLatitude: Number;
   currLongitude: Number;
   MAPS_API_KEY = environment.mapsApiKey;
   gymsSubscription: Subscription;
   gyms = {
      results: [
         { name: "default", business_status: "default", photos: [{ photo_reference: "default" }], rating: "default", vicinity: "default", place_id: "default" },
      ]
   }
   friends = [
      {
         displayName: "Jack",
         profilePhoto: "https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_1280.png",
         id: "",
         gymSessions: [{
            date: "", startTime: "", endTime: ""
         }]
      }
   ]
   userFriends:IFriendsModel[]=[];

   //will get this from the service

   data: any[] = [
      {
         name: 'Virgin Active',
         description: 'A small Description of the Location',
         image: 'https://loremflickr.com/320/240/gym',
         location: 'Hatfield',
      },
      {
         name: 'Gym & Fitness Center',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         image: 'https://loremflickr.com/320/240/pushups',
         location: 'Pretoria',
      },
      {
         name: 'Fitness First',
         description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
         image: 'https://loremflickr.com/320/240/dumbbell',
         location: 'Johannesburg',
      },
      {
         name: 'XYZ Gym',
         description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
         image: 'https://loremflickr.com/320/240/benchpress',
         location: 'Cape Town',
      },
      {
         name: 'Active Life Fitness',
         description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
         image: 'https://loremflickr.com/320/240/running',
         location: 'Durban',
      },
   ];

   unfilteredData$ = this.data;

   ngOnInit() {

      this.store.dispatch(new GetFriendsAction());
      // this.loadData();
      this.triggerfilter();
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition();
      //   navigator.geolocation.getCurrentPosition(function (position) {
      //     pos = {
      //       lat: position.coords.latitude,
      //       lng: position.coords.longitude
      //     };
      //   }
      // }
      // try {
      //   const userLocation = await this.getCurrentLocation();
      //   console.log('User Location:', userLocation);
      //   Use the userLocation object as needed
      // } catch (error) {
      //   console.log('Error getting current location:', error);
      //   Handle error
      // }

      // this.getCurrUserFriends().then((friends)=>{
      //    this.userFriends=friends;
      //    console.log("Your friends");
      //    console.log(this.userFriends);
      // });
      this.friends$.subscribe((response)=>{
         this.userFriends = response;
         this.userFriends.forEach(element => {
            console.log(element);
         });
       })

      this.getCurrentLocation().then((coordinates: GeolocationCoordinates) => {
         this.currLatitude = coordinates.latitude;
         this.currLongitude = coordinates.longitude;
         console.log('Latitude:', this.currLatitude);
         console.log('Longitude:', this.currLongitude);
         console.log('maxDistance:', this.maxDistance);
         // const url = `https://us-central1-sweatsession.cloudfunctions.net/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance*1000}&key=${this.MAPS_API_KEY}`;
         const url = `http://127.0.0.1:5005/demo-project/us-central1/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance * 1000}&key=${this.MAPS_API_KEY}`;
         // const url = `localhost:4200/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance}&key=${this.MAPS_API_KEY}`;
         fetch(url)
            .then((response) => response.json())
            .then((data) => {
               // Handle the response data
               console.log(data);
               console.log(data.results);
               this.gyms = data;
            })
            .catch((error) => {
               // Handle any errors that occur during the request
               console.error(error);
            });
         // this.gymsSubscription = this.locationService.searchNearbyGyms(this.currLatitude, this.currLongitude, this.maxDistance, this.MAPS_API_KEY).subscribe((gyms) => {
         //    console.log('Nearby gyms:', gyms);
         // }, (error) => {
         //    console.error('Error searching for nearby gyms:', error);
         // });
         // this.gymsSubscription = this.searchNearbyGyms().subscribe((gyms) => {
         //   console.log('Nearby gyms:', gyms);
         // }, (error) => {
         //   console.error('Error searching for nearby gyms:', error);
         // });
      }).catch((error) => {
         console.log('Error getting current location:', error);
      });
      // const nearbyGymProxyRequestFunction = firebase.functions().httpsCallable('nearbyGymProxyRequest');
      // const functions = getFunctions();
      // const nearbyGymProxyRequest = httpsCallable(functions, 'nearbyGymProxyRequest');
      // nearbyGymProxyRequest()
   }

   searchNearbyGyms() {
      this.getCurrentLocation().then((coordinates: GeolocationCoordinates) => {
         this.currLatitude = coordinates.latitude;
         this.currLongitude = coordinates.longitude;
         console.log('Latitude:', this.currLatitude);
         console.log('Longitude:', this.currLongitude);
         console.log('maxDistance:', this.maxDistance);
         // const url = `https://us-central1-sweatsession.cloudfunctions.net/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance*1000}&key=${this.MAPS_API_KEY}`;
         const url = `http://127.0.0.1:5005/demo-project/us-central1/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance * 1000}&key=${this.MAPS_API_KEY}`;
         // const url = `localhost:4200/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance}&key=${this.MAPS_API_KEY}`;
         fetch(url)
            .then((response) => response.json())
            .then((data) => {
               console.log(data);
               console.log(data.results);
               this.gyms = data;
            })
            .catch((error) => {
               console.error(error);
            });
      }).catch((error) => {
         console.log('Error getting current location:', error);
      });
   }

   loadData() {
      this.onSearchInput('');
   }

   triggerfilter() {
      this.filteredData$ = this.searchTerm$.pipe(
         startWith(''),
         debounceTime(300),
         distinctUntilChanged(),
         map(searchTerm => this.filterData(searchTerm))
      );
   }

   filterData(searchTerm: string): any[] {
      if (!searchTerm || searchTerm === '' || searchTerm === null) {
         return this.data;
      }
      return this.data.filter(item => item.name.includes(searchTerm));
   }


   onSearchInput(event: any) {
      const searchTerm = event.target.value;
      // this.searchTerm = searchTerm;
      this.searchTerm$.next(searchTerm);
   }

   dismissModal() {
      this.modalController.dismiss();
   }

   selectGym(name: string, chosenPlaceId: string) {
      this.modalController.dismiss({ selectedGym: name, placeId: chosenPlaceId });
      // alert("gym with name: "+name+"place id: "+place_id);
   }

   getCurrentLocation(): Promise<GeolocationCoordinates> {
      return this.geolocation.getCurrentPosition().then((position: GeolocationPosition) => {
         const { latitude, longitude } = position.coords;
         // this.searchNearbyGyms().then((gyms) => {
         //   console.log('Nearby gyms:', gyms);
         // }).catch((error) => {
         //   console.error('Error searching for nearby gyms:', error);
         // });
         const geolocationCoordinates: GeolocationCoordinates = {
            latitude: latitude,
            longitude: longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            speed: position.coords.speed
         };
         return geolocationCoordinates;
      });
   }

   getPhotoUrl(photoReference: string | undefined): string {
      const maxWidth = 400; // Replace with your desired width

      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${this.MAPS_API_KEY}`;
   }

   viewProfile(id: string) {

   }

   // async getCurrUserFriends() {
   //    const auth = getAuth();
   //    this.currUserId = auth.currentUser?.uid;
   //    if (this.currUserId != undefined) {
   //       sessionStorage.setItem('currUserId', this.currUserId);
   //    } else {
   //       this.currUserId = sessionStorage.getItem('currUserId');
   //    }
   //    const userFriends = await this.friendsRepository.getFriends({ userId: this.currUserId! }).toPromise();
   //    console.log(userFriends);
   //    return userFriends?.friends;
   // }
}

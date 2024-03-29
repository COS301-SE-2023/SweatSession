import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonModal, ModalController, ToastController } from '@ionic/angular';
import { of, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { Geolocation as GeolocationCapacitor } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LocationsService } from 'src/app/services/location/location.services';
// import { getFunctions, httpsCallable } from '@angular/fire/functions';
// import { FriendsService } from 'src/app/services';
import { getAuth } from '@angular/fire/auth';
import { BadgesRepository, FriendsRepository } from 'src/app/repository';
import { FriendsState } from 'src/app/states';
import { Select, Store } from '@ngxs/store';
import { IFriendsModel } from 'src/app/models';
import { GetFriendsAction } from 'src/app/actions';
import { LocationRepository } from 'src/app/repository/location.repository';
import { Timestamp } from 'firebase/firestore';
// import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
// import { profile } from 'console';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@Component({
   selector: 'gymsearch',
   templateUrl: './gymsearch.component.html',
   styleUrls: ['./gymsearch.component.scss'],
   providers: [DatePipe, AndroidPermissions],
})
export class GymsearchComponent implements OnInit {
   currUserId: string | undefined | null;
   showFriends: any = {};
   gymChosen: string;
   chosenPlaceId: string;
   friendsSubscription: Subscription;
   constructor(private store: Store, private modalController: ModalController, private geolocation: Geolocation, private httpClient: HttpClient, private locationRepository: LocationRepository, private friendsRepository: FriendsRepository, private friendsState: FriendsState, private datePipe: DatePipe, private toastController: ToastController, private badgesRepository: BadgesRepository, private androidPermissions: AndroidPermissions) {
      this.data.filter(item => item.name.includes(''));
   }

   @Select(FriendsState.returnFriends) friends$!: Observable<IFriendsModel[]>;
   @ViewChild(IonContent) content: IonContent;
   @ViewChild('modal') modal: IonModal;
   searchTerm: string = "";
   filteredData$: Observable<any[]> = of([]);
   nextPageToken = "";
   // unfilteredData$: any[] = [];
   private searchTerm$ = new Subject<string>();
   maxDistance: number = 15;//default in kilometers
   currLatitude: Number;
   currLongitude: Number;
   MAPS_API_KEY = environment.mapsApiKey;
   gymsSubscription: Subscription;
   currentFriendsInfo: any = [[{ profilePhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", friendDisplayName: "testfdn", workoutName: "testWN", date: "02-02-2023", startTime: Timestamp.now(), endTime: Timestamp.now() }]];
   gyms: any = {
      results: [
         { name: "default", business_status: "default", photos: [{ photo_reference: "default" }], rating: "default", vicinity: "default", place_id: "default", friendsLocationInfo: [[]] }, { friendsLocationInfo: [] }
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
   userFriends: IFriendsModel[] = [];
   userFriendIds: string[];
   gymUsers: any;

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

   async ngOnInit() {

      // this.locationRepository.getLocation("ChIJF7oBeAFhlR4RcP7sFSzacP8", this.userFriendIds);
      this.store.dispatch(new GetFriendsAction());
      this.triggerfilter();
      this.userFriendIds = []
      // await this.friends$.pipe(take(1)).toPromise().then((response) => {
      //    this.userFriends = response!;
      //    this.userFriends.forEach(element => {
      //      console.log(element);
      //      this.userFriendIds.push(element.userId!);
      //    });
      //  });
      this.friendsSubscription = this.friends$.subscribe(async (response) => {
         if (this.userFriends.length === 0) {
            this.userFriends = response;
            this.userFriends.forEach(element => {
               console.log(element);
               this.userFriendIds.push(element.userId!);
            });


            console.log(this.userFriendIds)

            
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
            .then((resultCoarse) => {
              if (resultCoarse.hasPermission) {
                // ACCESS_COARSE_LOCATION permission is granted
                // You can use Geolocation API here
                // Call Geolocation API here
              } else {
                // Request ACCESS_COARSE_LOCATION permission
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                  .then((reqResult) => {
                    if (reqResult.hasPermission) {
                      // Permission granted; you can get the location now
                      // Call Geolocation API here
                    } else {
                      // Permission still not granted; handle accordingly
                    }
                  });
              }
            });

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
            .then((resultCoarse) => {
              if (resultCoarse.hasPermission) {
                // ACCESS_COARSE_LOCATION permission is granted
                // You can use Geolocation API here
                // Call Geolocation API here
              } else {
                // Request ACCESS_COARSE_LOCATION permission
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
                  .then((reqResult) => {
                    if (reqResult.hasPermission) {
                      // Permission granted; you can get the location now
                      // Call Geolocation API here
                    } else {
                      // Permission still not granted; handle accordingly
                    }
                  });
              }
            });





            // const permission = await GeolocationCapacitor.checkPermissions();
            // if (permission.location === 'denied') {
            //    // Request permission if it's denied
            //    await GeolocationCapacitor.requestPermissions();
            // }
            const coordinates = await this.getCurrentLocation();
            this.currLatitude = coordinates!.latitude;
            this.currLongitude = coordinates!.longitude;
            // this.currLatitude = -25.7694108
            // this.currLongitude = 28.259215
            console.log('Latitude:', this.currLatitude);
            console.log('Longitude:', this.currLongitude);
            console.log('maxDistance:', this.maxDistance);
            await this.loadData();
            console.log(this.gymUsers);
            // console.log(this.gyms);
         }
      });
      //  this.userFriendIds= await firstValueFrom(this.friends$);
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
      // this.getCurrentLocation().then((coordinates: GeolocationCoordinates) => {
      //    this.currLatitude = coordinates.latitude;
      //    this.currLongitude = coordinates.longitude;
      //    console.log('Latitude:', this.currLatitude);
      //    console.log('Longitude:', this.currLongitude);
      //    console.log('maxDistance:', this.maxDistance);
      //    // const url = `https://us-central1-sweatsession.cloudfunctions.net/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance*1000}&key=${this.MAPS_API_KEY}`;
      //    await this.loadData();
      //    this.gymUsers = [];
      //    this.gyms.results.forEach((gym) => {
      //       console.log(gym)
      //       this.getGymUsers(gym.place_id).subscribe((response) => {
      //          this.gymUsers.push(response);
      //       });
      //    });
      //    console.log(this.gymUsers);
      //    // this.gymsSubscription = this.locationService.searchNearbyGyms(this.currLatitude, this.currLongitude, this.maxDistance, this.MAPS_API_KEY).subscribe((gyms) => {
      //    //    console.log('Nearby gyms:', gyms);
      //    // }, (error) => {
      //    //    console.error('Error searching for nearby gyms:', error);
      //    // });
      //    // this.gymsSubscription = this.searchNearbyGyms().subscribe((gyms) => {
      //    //   console.log('Nearby gyms:', gyms);
      //    // }, (error) => {
      //    //   console.error('Error searching for nearby gyms:', error);
      //    // });
      // }).catch((error) => {
      //    console.log('Error getting current location:', error);
      // });
      // const nearbyGymProxyRequestFunction = firebase.functions().httpsCallable('nearbyGymProxyRequest');
      // const functions = getFunctions();
      // const nearbyGymProxyRequest = httpsCallable(functions, 'nearbyGymProxyRequest');
      // nearbyGymProxyRequest()
   }

   ngOnDestroy() {
      this.friendsSubscription.unsubscribe();
   }

   // async searchNearbyGyms() {
   //    this.getCurrentLocation().then((coordinates: GeolocationCoordinates) => {
   //       this.currLatitude = coordinates.latitude;
   //       this.currLongitude = coordinates.longitude;
   //       console.log('Latitude:', this.currLatitude);
   //       console.log('Longitude:', this.currLongitude);
   //       console.log('maxDistance:', this.maxDistance);
   //       const url = `https://us-central1-sweatsession.cloudfunctions.net/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance * 1000}&key=${this.MAPS_API_KEY}` + (this.nextPageToken ? `&nextPageToken=${this.nextPageToken}` : '');
   //       // const url = `http://127.0.0.1:5005/sweatsession/us-central1/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance * 1000}&key=${this.MAPS_API_KEY}`;
   //       fetch(url)
   //          .then((response) => response.json())
   //          .then(async (data) => {
   //             console.log(data);
   //             console.log(data.results);
   //             this.gyms = data;
   //             // this.nextPageToken=data.next_page_token;
   //             await this.getGymUsersForGyms(this.userFriendIds);
   //             console.log(this.gyms);
   //          })
   //          .catch((error) => {
   //             console.error(error);
   //          });
   //    }).catch((error) => {
   //       console.log('Error getting current location:', error);
   //    });

   // }

   async loadData() {
      try {
         const maxRetries = 5;
         let nextPageToken = this.nextPageToken || "";

         for (let retryCount = 0; retryCount < maxRetries; retryCount++) {
            if (this.maxDistance > 50 || this.maxDistance < 0) {
               alert("Search Radius must be positive and less than 50km");
               break;
            }
            const url = `https://us-central1-synapsesolutions-b4c95.cloudfunctions.net/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance * 1000}&key=${this.MAPS_API_KEY}&nextPageToken=${nextPageToken}`;
            //  const url = `http://127.0.0.1:5005/sweatsession/us-central1/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance * 1000}&key=${this.MAPS_API_KEY}&nextPageToken=${nextPageToken}`;
            //  const url = `http://127.0.0.1:5005/synapsesolutions-b4c95/us-central1/nearbyGymProxyRequest?latitude=${this.currLatitude}&longitude=${this.currLongitude}&radius=${this.maxDistance * 1000}&key=${this.MAPS_API_KEY}&nextPageToken=${nextPageToken}`;
            // console.log(url);

            const response = await fetch(url);
            // console.log(response)
            const data = await response.json();

            // console.log(data);
            console.log(data.results);

            let responseStatus = data.status;
            this.gyms = data;

            this.nextPageToken = data.next_page_token; // Get the new nextPageToken

            if (responseStatus == "OK") {
               break; // Exit the loop if the response status is "OK"
            }

            if (retryCount < maxRetries - 1) {
               // If this is not the last retry, wait for a while before retrying.
               await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before retrying.
            }
         }
         await this.getGymUsersForGyms(this.userFriendIds);
         return this.gyms;
      } catch (error) {
         // console.error(error);
         return this.gyms;
      }
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

   filter(data: any) {
      if (!this.searchTerm || this.searchTerm === '' || this.searchTerm === null) {
         return data;
      }
      return this.data.filter(item => item.name.toLowerCase().includes(this.searchTerm));
   }

   dismissModal() {
      this.modalController.dismiss();
      this.nextPageToken = "";
   }

   selectGym(name: string, chosenPlaceId: string, time: string = "", date: string = "", duration: string = "", workoutName: string = "") {
      console.log(name, chosenPlaceId, time, date, duration, workoutName);
      this.modalController.dismiss({ selectedGym: name, placeId: chosenPlaceId, selectedTime: time, selectedDate: date, selectedDuration: duration, selectedWorkoutName: workoutName });
      // alert("gym with name: "+name+"place id: "+place_id);
   }

   async joinSession(name: string, id: string, time: string, date: string, endTime: string, workoutName: string) {
      const auth = getAuth();
      this.currUserId = auth.currentUser?.uid;
      if (this.currUserId != undefined) {
         sessionStorage.setItem('currUserId', this.currUserId);
      } else {
         this.currUserId = sessionStorage.getItem('currUserId');
      }
      this.badgesRepository.addBadge(this.currUserId!, 5); //Dynamic Duo Badge
      console.log(name, id, time, date, endTime, workoutName);
      this.selectGym(name, id, time, date, endTime, workoutName);
      await this.modalController.dismiss({ selectedGym: name, placeId: id, selectedTime: time, selectedDate: date, selectedDuration: endTime, selectedWorkoutName: workoutName });
      this.selectGym(name, id, time, date, endTime, workoutName);
      await this.modalController.dismiss({ selectedGym: name, placeId: id, selectedTime: time, selectedDate: date, selectedDuration: endTime, selectedWorkoutName: workoutName });
      // alert("gym with name: "+name+"place id: "+place_id);
   }

   getCurrentLocation(): Promise<GeolocationCoordinates | null> {

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
      }).catch(error => {
         // User denied location access
         if (error.code === error.PERMISSION_DENIED) {
            // Dismiss modal
            this.dismissModal();

            // Show message to user
            this.locationToast
         }
         return null
      });
   }

   getPhotoUrl(photoReference: string | undefined): string {
      const maxWidth = 400; // Replace with your desired width

      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${this.MAPS_API_KEY}`;
   }


   async getGymUsers(placeId: string, friendIds: string[]) {
      // console.log("getting gym users for: "+placeId)
      const friendsLocationInfo = await this.locationRepository.getLocation(placeId, friendIds);
      // if (placeId == "ChIJ4-tknf5glR4RGm5xRwH54ds") {
      //    console.log("in getGymUsers")
      // }
      // console.log(locationObservable);
      return friendsLocationInfo;
   }

   async getGymUsersForGyms(friendIds: string[]) {
      console.log("getGymUsersForGyms")
      console.log(friendIds)
      this.gymUsers = [];
      this.gyms.results.forEach(async (gym: any) => {
         // this.getGymUsers(gym.place_id).subscribe((response) => {
         //    this.gymUsers.push(response);
         //    console.log(response)
         // });
         if (gym.business_status == "OPERATIONAL") {
            gym.friendsLocationInfo = await this.getGymUsers(gym.place_id, friendIds);
         }
      });
   }

   async nextPage() {
      // this.nextPageToken=this.gyms.next_page_token;
      // console.log(this.nextPageToken)
      // const coordinates = await this.getCurrentLocation();
      // this.currLatitude = coordinates.latitude;
      // this.currLongitude = coordinates.longitude;
      // this.currLatitude = -25.7694108
      // this.currLongitude = 28.259215
      // console.log('Latitude:', this.currLatitude);
      // console.log('Longitude:', this.currLongitude);
      // console.log('maxDistance:', this.maxDistance);
      await this.loadData();
      this.content.scrollToTop();
      console.log(this.maxDistance)
   }

   formatTime(timestamp: Timestamp): string {
      const date: Date = timestamp.toDate();
      const hours: number = date.getHours();
      const minutes: number = date.getMinutes();

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
   }

   formatDate(dateString: string): string {
      const date = new Date(dateString);
      return this.datePipe.transform(date, 'dd MMMM yyyy')!;
   }

   toggleFriends(place_id: string, fInfo: any, gymChosen: string) {
      // this.showFriends[place_id] = true;
      //console.log(fInfo);
      console.log(place_id);
      this.currentFriendsInfo = fInfo;
      console.log(this.currentFriendsInfo);
      this.gymChosen = gymChosen;
      this.chosenPlaceId = place_id;
      this.modal.present()
   }


   viewProfile(id: string) {
      // this.store.dispatch(new StageOtheruserInfo(user));
   }

   calcShape(r: number, i: number) {
      if (r - i > 0.25 && r - i < 0.75) {
         return "star-half";
      } else {
         return "star";
      }
   }

   async locationToast() {

      const toast = await this.toastController.create({
         message: 'Please allow location access',
         duration: 2000
      });
      toast.present();

   }

   // onModalPresent(event: Event) {

   //    console.log('Modal presented');

   //    console.log(this.currentFriendsInfo);

   //    for (let friend of this.currentFriendsInfo){
   //       console.log("friend")
   //       console.log(friend)
   //       console.log("profilephoto")
   //       console.log(friend[0].profilePhoto)
   //    }

   //  }
}

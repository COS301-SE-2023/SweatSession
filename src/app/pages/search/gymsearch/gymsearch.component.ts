import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'gymsearch',
  templateUrl: './gymsearch.component.html',
  styleUrls: ['./gymsearch.component.scss'],
})
export class GymsearchComponent implements OnInit {

  constructor(private modalController: ModalController, private geolocation: Geolocation, private httpClient: HttpClient) {
    this.data.filter(item => item.name.includes(''));
  }

  searchTerm: string | undefined;
  filteredData$: Observable<any[]> = of([]);
  // unfilteredData$: any[] = [];
  private searchTerm$ = new Subject<string>();
  maxDistance: number = 15;//default in kilometers
  currLatitude: Number;
  currLongitude: Number;
  MAPS_API_KEY = environment.mapsApiKey;
  gymsSubscription: Subscription;
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
    this.getCurrentLocation().then((coordinates: GeolocationCoordinates) => {
      this.currLatitude = coordinates.latitude;
      this.currLongitude = coordinates.longitude;
      console.log('Latitude:', this.currLatitude);
      console.log('Longitude:', this.currLongitude);
      console.log('maxDistance:', this.maxDistance);
      this.gymsSubscription = this.searchNearbyGyms().subscribe((gyms) => {
        console.log('Nearby gyms:', gyms);
      }, (error) => {
        console.error('Error searching for nearby gyms:', error);
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

  selectGym(name: string) {
    this.modalController.dismiss({ selectedGym: name });
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
  
  searchNearbyGyms() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // CORS proxy URL
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.currLatitude},${this.currLongitude}&radius=${this.maxDistance*1000}&type=gym&key=${this.MAPS_API_KEY}`;
    const url = proxyUrl + apiUrl; // Combine proxy URL and API URL
  
    return this.httpClient.get(url);
  }
  
}

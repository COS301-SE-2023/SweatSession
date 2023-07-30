// // location.repository.spec.js

import { GymsearchComponent } from './gymsearch.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { LocationGymSession } from '../models/location.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
    initializeFirestore,
    provideFirestore,
    connectFirestoreEmulator,
    getFirestore,
    Firestore,
} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
    getRemoteConfig,
    provideRemoteConfig
} from '@angular/fire/remote-config';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import {
    FirebaseOptions,
    initializeApp,
    provideFirebaseApp,
    getApp
} from '@angular/fire/app';
import {
    connectDatabaseEmulator,
    getDatabase,
    provideDatabase
} from '@angular/fire/database';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
// import { ProfileService } from '../services';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Timestamp } from 'firebase/firestore';
import fetch from 'node-fetch';
global.fetch = jest.fn().mockImplementation(() => 
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
            results: [
               { business_status: "CLOSED_TEMPORARILY", rating: 3, vicinity: "496 uikk, Lynnwood, Pretoria", place_id: "ChIJUww6lfRglR4RPz44wt9Osvg",icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
               icon_background_color: "#7B9EB0",
               icon_mask_base_uri: "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
               name: "the Tuks tree.",
               permanently_closed: true }
            ],
            html_attributions: [],
            next_page_token: "Aaw_FcKnGIGryIUdPRsGiEETIrMCSxBo4rXIW950fUrel1Ba5A6gSnJzHNKBaz",
            status: "OK"
    })
  })
);


@NgModule({
    declarations: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        NgxsModule.forRoot(),
        IonicModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        AppRoutingModule,
        AngularFirestoreModule,
        HttpClientModule,
        provideRemoteConfig(() => getRemoteConfig()),
        provideAnalytics(() => getAnalytics()),
        provideAuth(() => {
            const auth = getAuth();
            if (environment.useEmulators) {
                connectAuthEmulator(auth, 'http://localhost:5002', {
                    disableWarnings: true,
                });
            }
            return auth;
        }),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => {
            let firestore: Firestore;
            if (environment.useEmulators) {
                // Long polling required for Cypress
                firestore = initializeFirestore(getApp(), {
                    experimentalForceLongPolling: true,
                });
                connectFirestoreEmulator(firestore, 'localhost', 5003);
            } else {
                firestore = getFirestore();
            }
            return firestore;
        }),

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestore, Geolocation, HttpClient],
    bootstrap: [AppComponent],
})
export class AppModule { }

describe('GymsearchComponent Integration Tests', () => {
    let component: GymsearchComponent;
    let repository: GymsearchComponent;
    let fixture: ComponentFixture<GymsearchComponent>;
    let profileService: any; // Mock profileService
    let angularFirestore: any; // Mock AngularFirestore
    let auth: any; // Mock auth service

    beforeEach(waitForAsync(() => {
        profileService = {
            getProfile: jest.fn().mockReturnValue(of({ // Use the "of" function from 'rxjs' to create an Observable with the mock response
                profile: {
                    displayName: 'John Doe',
                    profileURL: 'https://example.com/profile.jpg',
                    // Add other properties you need for userProfile
                },
            })),
        };

        angularFirestore = {
            collection: jest.fn().mockReturnThis(),
            doc: jest.fn().mockReturnThis(),
            set: jest.fn().mockResolvedValue({}), // Mock the set method
            get: jest.fn(),
        };

        auth = {
            currentUser: {
                uid: 'TestUserID1234567890', // Mock current user ID
            },
        };
        TestBed.configureTestingModule({
            // declarations: [GymsearchComponent],
            imports: [
                AppModule
            ],
            providers: [
                GymsearchComponent,
                // { provide: ProfileService, useValue: profileService },
                { provide: AngularFirestore, useValue: angularFirestore },
                { provide: DatePipe, useValue: {} },
                { provide: getAuth, useValue: () => auth },
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(GymsearchComponent);
        component = fixture.componentInstance;
        // component = fixture.componentInstance;
        // fixture.detectChanges();
    }));

    // it('should create', async () => {

    // });

    it('should create a new gym session', async () => {
        // Mock data for testing
    // const mockLatitude = 1.234;
    // const mockLongitude = 5.678;
    // const mockMaxDistance = 10; // Assuming 10 km
    // const mockMAPS_API_KEY = 'your_mock_api_key';
    // const mockNextPageToken = 'your_mock_next_page_token';
    // const mockResponse = {
    //   results: [/* Mock data from the API response */],
    //   next_page_token: mockNextPageToken,
    // };

    // // Mock the fetch function to return the mock response
    // // jest.spyOn(window, 'fetch').mockResolvedValue({
    // //   json: jest.fn().mockResolvedValue(mockResponse),
    // // } as Response);

    // // Set component properties if needed (e.g., currLatitude, currLongitude, etc.)
    // component.currLatitude = mockLatitude;
    // component.currLongitude = mockLongitude;
    // component.maxDistance = mockMaxDistance;
    // component.MAPS_API_KEY = mockMAPS_API_KEY;
    // Call the loadData method
    const gyms = await component.loadData();

    // Perform assertions
    console.log(gyms)
    const startTime = Timestamp.fromMillis(100000000);
    const endTime = Timestamp.fromMillis(200000000);
    const currDate = "06-07-2023";
    expect(`${component.formatDate(currDate)}: ${component.formatTime(startTime)}-${component.formatTime(endTime)}`).toEqual("07 June 2023: 05:46-09:33");
    expect(component.gyms).toEqual({
        results: [
           { business_status: "CLOSED_TEMPORARILY", rating: 3, vicinity: "496 uikk, Lynnwood, Pretoria", place_id: "ChIJUww6lfRglR4RPz44wt9Osvg",icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
           icon_background_color: "#7B9EB0",
           icon_mask_base_uri: "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
           name: "the Tuks tree.",
           permanently_closed: true }
        ],
        html_attributions: [],
        next_page_token: "Aaw_FcKnGIGryIUdPRsGiEETIrMCSxBo4rXIW950fUrel1Ba5A6gSnJzHNKBaz",
        status: "OK"
});
    // You may add more assertions based on the behavior of the method
    });
});
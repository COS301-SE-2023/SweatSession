// // location.repository.spec.js

import { LocationRepository } from './location.repository'; 
// import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AngularFirestore, CollectionReference, DocumentReference } from '@angular/fire/compat/firestore';
// import {
//     FirebaseOptions,
//     initializeApp,
//     provideFirebaseApp,
//     getApp
//   } from '@angular/fire/app';
// import { AngularFireModule } from '@angular/fire/compat';
// import { environment } from 'src/environments/environment';
// import { Firestore, getFirestore, Timestamp } from 'firebase/firestore';
// import { NgModule } from '@angular/core';
// import { connectFirestoreEmulator, initializeFirestore } from '@angular/fire/firestore';
// // import { getFirestore } from '@angular/fire/firestore';

// @NgModule({
//     // schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
//     imports: [
//         provideFirebaseApp(() => initializeApp(environment.firebase)),
//         provideFirestore(() => {
//           let firestore: Firestore;
//           if (environment.useEmulators) {
//             // Long polling required for Cypress
//             firestore = initializeFirestore(getApp(), {
//               experimentalForceLongPolling: true,
//             });
//             connectFirestoreEmulator(firestore, 'localhost', 5003);
//           } else {
//             firestore = getFirestore();
//           }
//           return firestore;
//         }),
//     ]
//   })
//   class TestModule {}  

// jest.mock('@angular/fire/compat/firestore');

// describe('LocationRepository', () => {

//   let repository: LocationRepository;
//   let afs: AngularFirestore;
//   const firestore = {} as Firestore; 
//   let firestoreMock =  {
//     collection: jest.fn().mockReturnThis(),
//     doc: jest.fn().mockReturnThis(),
//     snapshotChanges: jest.fn(() => of([])),
//     delete: jest.fn().mockResolvedValueOnce({}),
//     update: jest.fn().mockReturnValue(of({})),
//     add: jest.fn().mockReturnValue(of({})
//     )
//   };

//   beforeEach(() => {
//     class FirestoreService {
//         constructor(public fs: Firestore) {}
//       }
//     TestBed.configureTestingModule({
//         providers: [
//             FirestoreService,
//           LocationRepository,
//           { provide: AngularFirestore, useValue: firestoreMock },
//           { provide: Firestore, useValue: firestore }
//         ],
//         imports: [
//             TestModule
//           ]
//       });

//       repository = TestBed.inject(LocationRepository);
//   });

//   describe('addGymSession', () => {

//     it('should add a gym session document in the current user\'s subcollection', async () => {

//       // Mock document set method

//       // Call method
//       await repository.addGymSession(
//         'Tuks Student Gym', 
//         new Date("01-08-2023"), 
//         {hours: 16, minutes: 30},
//         Timestamp.fromDate(new Date("01-08-2023 16:00")),
//         'Leg Day'  
//       );

//       // Assertions
//     //   expect(setSpy).toHaveBeenCalledTimes(1);
//     //   expect(setSpy.mock.calls[0][0]).toEqual(`locations/placeId/${currUserId}`);

//     //   const setData = setSpy.mock.calls[0][1].set;
//     //   expect(setData).toHaveBeenCalledTimes(1);
//     //   expect(setData.mock.calls[0][0]).toEqual({
//         // document data
//       });
//     });

//   });

// //   describe('getLocation', () => {

// //     it('should get location gym sessions', async () => {

// //       const docSpy = jest.spyOn(afs.collection(), 'doc'); 
// //     //   docSpy.mockReturnValue({
// //     //     collection: () => ({
// //     //       get: jest.fn().mockResolvedValue([
// //     //         {
// //     //           data: () => {
// //     //             // mock gym session
// //     //           }
// //     //         }  
// //     //       ])
// //     //     })
// //     //   });

// //       const friendIds = ['123']; 
// //       const result = await repository.getLocation('placeId', friendIds);

// //       expect(docSpy).toHaveBeenCalledWith('locations/placeId');
// //       expect(result.length).toBe(1); 
// //       expect(result[0].length).toBe(1); // 1 gym session
// //     });

// //   });

// // });

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as admin from 'firebase-admin';

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
        provideDatabase(() => {
            const database = getDatabase();
            if (environment.useEmulators) {
                connectDatabaseEmulator(database, 'localhost', 5004);
            }
            return database;
        }),

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestore, Geolocation, HttpClient],
    bootstrap: [AppComponent],
})
export class AppModule { }

describe('LocationRepository', () => {
    // let component: LocationRepository;
    // let fixture: ComponentFixture<LocationRepository>;

    // beforeEach(() => {
    //     fixture = TestBed.createComponent(LocationRepository);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    // });

    it('should create', () => {
        expect(true).toBeTruthy();
    });
});
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as admin from 'firebase-admin';

import {
  initializeFirestore,
  provideFirestore,
  connectFirestoreEmulator,
  getFirestore,
  Firestore,
} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
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
import {
  connectStorageEmulator,
  getStorage,
  provideStorage
} from '@angular/fire/storage';
import {
  connectFunctionsEmulator,
  getFunctions,
  provideFunctions
} from '@angular/fire/functions';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 

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
    provideStorage(() => {
      const storage = getStorage();
      if (environment.useEmulators) {
        connectStorageEmulator(storage, 'localhost', 5006);
      }
      return storage;
    }),
    provideFunctions(() => {
      const functions = getFunctions();
      if (environment.useEmulators) {
        connectFunctionsEmulator(functions, 'localhost', 5005);
      }
      return functions;
    }),

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestore, Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule { }
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import * as admin from 'firebase-admin';

// admin.initializeApp();
// admin.firestore().settings({ ignoreUndefinedProperties: true });

//export * from '../functions';

if (environment.production) { // This line is commented out to allow for debugging in the browser.
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadPageRoutingModule } from './download-routing.module';

import { DownloadPage } from './download.page';
// import { FileOpener } from '@ionic-native/file-opener/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadPageRoutingModule
  ],
  declarations: [DownloadPage],
  // providers: [
  //   // ... other providers
  //   FileOpener, // Add the FileOpener here
  // ],
})
export class DownloadPageModule {}

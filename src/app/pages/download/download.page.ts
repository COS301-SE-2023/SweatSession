import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {

  constructor(
    // private platform: Platform,
    // private fileOpener: FileOpener
  ) { }

  ngOnInit() {
    // this.downloadAPK();
  }

  // downloadAPK() {
  //   try {
  //     if (this.platform.is('android')) {
  //       const apkUrl = 'https://github.com/COS301-SE-2023/SweatSession/releases/download/v0.1/SweatSession.apk';
    
  //       this.fileOpener.open(apkUrl, 'application/vnd.android.package-archive')
  //         .then(() => {
  //           console.log('File is opened successfully');
  //         })
  //         .catch((err:any) => {
  //           console.error('Error opening file:', err);
  //         });
  //     }
  //   }catch(err){
  //     alert("Could not install app. Make sure you are using an Android device.");
  //   }
  // }
  // downloadAPK() {
  //   const url = './SweatSession.apk';
  //   if (this.platform.is('android')) {
  //     this.appVersion.installApp('https://github.com/COS301-SE-2023/SweatSession/releases/download/v0.1/SweatSession.apk').then(() => {
  //       console.log('APK installation successful.');
  //     }).catch((error: any) => {
  //       alert('APK installation failed:');
  //       console.log(error);
  //     }); 
  //   }
  //   // File.downloadFile(url, {}, url.split('/').pop())
  //   //   .then(file => {
  //   //     FileOpener.open(file.toURL(), 'application/vnd.android.package-archive');
  //   //   });
  // }
}

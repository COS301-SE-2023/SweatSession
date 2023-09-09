import { Component, OnInit } from '@angular/core';
//import { File, FileOpener } from '@ionic-native/file';//will uncomment stuff

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.downloadAPK();
  }

  downloadAPK(){
    const url = 'https://ourapklink.apk';//change
    
    // File.downloadFile(url, {}, url.split('/').pop())
    // .then(file => {
    //   FileOpener.open(file.toURL(), 'application/vnd.android.package-archive'); 
    // });
  }
}

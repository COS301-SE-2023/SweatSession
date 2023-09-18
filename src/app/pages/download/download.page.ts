import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file';

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

  downloadAPK() {
    const url = './SweatSession.apk';

    // File.downloadFile(url, {}, url.split('/').pop())
    //   .then(file => {
    //     FileOpener.open(file.toURL(), 'application/vnd.android.package-archive');
    //   });
  }
}

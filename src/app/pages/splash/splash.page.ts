import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  darkmode : boolean = false;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('darkmode')=='true') {
      this.darkmode = true;
    } else {
      this.darkmode = false;
    }
  }

}

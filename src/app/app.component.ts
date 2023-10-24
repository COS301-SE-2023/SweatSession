import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  darkmode : boolean = false;
  constructor() {
    if(localStorage.getItem('darkmode')=='true') {
      document.body.setAttribute('color-theme','dark');
      this.darkmode = true;
    } else {
      document.body.setAttribute('color-theme','light');
      this.darkmode = false;
    }
  }
}

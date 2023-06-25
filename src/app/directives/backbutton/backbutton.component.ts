import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss'],
})
export class BackbuttonComponent  implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit() {}

  back() {
    this.navigation.back();
  }
}

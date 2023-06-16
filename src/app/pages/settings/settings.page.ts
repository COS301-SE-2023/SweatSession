import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  back() {
    this.navigation.back();
  }
}

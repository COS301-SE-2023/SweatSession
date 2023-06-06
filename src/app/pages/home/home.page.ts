import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthApi } from 'src/app/states/auth/auth.api';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav:NavController, private authAPI: AuthApi
  ) { }
 
  ngOnInit() {
    this.nav.navigateRoot("/home/dashboard");
  }

  userLogout(){
    this.authAPI.logout();
  }
}

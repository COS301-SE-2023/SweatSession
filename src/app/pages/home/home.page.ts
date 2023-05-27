import { Component, OnInit } from '@angular/core';
import { AuthApi } from 'src/app/states/auth/auth.api';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authAPI: AuthApi
  ) { }
 
  ngOnInit() {
  }

  userLogout(){
    this.authAPI.logout();
  }



}

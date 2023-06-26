import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { on } from 'events';
import { ISearchTerms } from 'src/app/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  isUserSlide = true;
  
  constructor() {}

  userSlide() {
    this.isUserSlide = true;
  }

  gymSlide() {
    this.isUserSlide = false;
  }
}

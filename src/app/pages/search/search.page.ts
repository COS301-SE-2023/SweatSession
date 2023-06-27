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
  isUserSlide = false;
  selectedSegment: string = 'user';
  
  constructor() {}

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }
}

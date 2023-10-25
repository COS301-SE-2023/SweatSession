import { Component } from '@angular/core';

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

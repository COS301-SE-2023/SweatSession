import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchTerm: string = '';
  //will get this from the service
  items = [
    { "name": 'Amit' },
    { "name": 'Amit1' },
    { "name": 'Amit2' },
    { "name": 'Amit3' },
    { "name": 'Amit4' },
    { "name": 'Amit5' },
  ]
  
  observableData = of(this.items);

  

  constructor() 
  { 
  }

  ngOnInit() {
  }

}

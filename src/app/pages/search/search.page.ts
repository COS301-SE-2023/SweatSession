import { Component, OnInit } from '@angular/core';
import { of, Observable,Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  searchTerm: string | undefined;
  filteredData$: Observable<any[]> = of([]);
  private searchTerm$ = new Subject<string>();
  //will get this from the service

  data: any[] = [
    {
      name: 'Virgin Active',
      description: 'A small Description of the Location',
      image: 'https://source.unsplash.com/random/200x200?sig=1',
      location: 'Hatfield',
    },
    {
      name: 'Gym & Fitness Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://source.unsplash.com/random/200x200?sig=1',
      location: 'Pretoria',
    },
    {
      name: 'Fitness First',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      image: 'https://source.unsplash.com/random/200x200?sig=1',
      location: 'Johannesburg',
    },
    {
      name: 'XYZ Gym',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      image: 'https://source.unsplash.com/random/200x200?sig=1',
      location: 'Cape Town',
    },
    {
      name: 'Active Life Fitness',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      image: 'https://source.unsplash.com/random/200x200?sig=1',
      location: 'Durban',
    },
  ];
  
  
  ngOnInit() {
    this.filteredData$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(searchTerm => this.filterData(searchTerm))
    );
    
  }

  constructor() 
  { 
    this.data.filter(item => item.name.includes(''));
  }

  filterData(searchTerm: string): any[] {
    if (!searchTerm || searchTerm === ''|| searchTerm === null) {
      return this.data;
    }
    return this.data.filter(item => item.name.includes(searchTerm));
  }


  onSearchInput(event: any) {
    const searchTerm = event.target.value;
    this.searchTerm$.next(searchTerm);
  }
}

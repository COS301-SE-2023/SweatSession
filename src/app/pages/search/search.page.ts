import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { on } from 'events';
import { start } from 'repl';
import { of, Observable,Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  searchTerm: string | undefined;
  filteredData$: Observable<any[]> = of([]);
  // unfilteredData$: any[] = [];
  private searchTerm$ = new Subject<string>();
  //will get this from the service
  
  data: any[] = [
    {
      name: 'Virgin Active',
      description: 'A small Description of the Location',
      image: 'https://loremflickr.com/320/240/gym',
      location: 'Hatfield',
    },
    {
      name: 'Gym & Fitness Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://loremflickr.com/320/240/pushups',
      location: 'Pretoria',
    },
    {
      name: 'Fitness First',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      image: 'https://loremflickr.com/320/240/dumbbell',
      location: 'Johannesburg',
    },
    {
      name: 'XYZ Gym',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      image: 'https://loremflickr.com/320/240/benchpress',
      location: 'Cape Town',
    },
    {
      name: 'Active Life Fitness',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      image: 'https://loremflickr.com/320/240/running',
      location: 'Durban',
    },
  ];
  
  unfilteredData$ = this.data;
  
  ngOnInit() {

    // this.loadData();
    this.triggerfilter();  
  }
  
  loadData() 
  {
    this.onSearchInput('');
  }

  triggerfilter()
  {
    this.filteredData$ = this.searchTerm$.pipe(
      startWith(''),
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
    // this.searchTerm = searchTerm;
    this.searchTerm$.next(searchTerm);
  }
}

import { Component, OnInit } from '@angular/core';
import { of, Observable,Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchTerm: string = "";
  filteredData$: Observable<any[]>;
  private searchTerm$ = new Subject<string>();
  //will get this from the service

  data = [
    { "name": 'Amit' },
    { "name": 'Amit1' },
    { "name": 'Amit2' },
    { "name": 'Amit3' },
    { "name": 'Amit4' },
    { "name": 'Amit5' },
  ]
  
  

  constructor() 
  { 
    this.filteredData$ = this.searchTerm$.pipe(
      debounceTime(300), // Wait for 300ms of inactivity before considering a new search term
      distinctUntilChanged(), // Only emit when the search term changes
      map(searchTerm => this.filterData(searchTerm))
    );
  }

  ngOnInit(){
    
  }

  filterData(searchTerm: string): any[] {
  // Implement your filtering logic here
  // For example, filter the original data array based on the search term
  return this.data.filter(item => item.name.includes(searchTerm));
  }

  onSearchInput(event: any) {
    const searchTerm = event.target.value;
    this.searchTerm$.next(searchTerm);
  }
}

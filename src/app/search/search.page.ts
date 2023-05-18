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

  data:any[] = [
    { name: 'Amit' },
    { name: 'Amit1' },
    { name: 'Amit2' },
    { name: 'Amit3' },
    { name: 'Amit4' },
    { name: 'Amit5' },
  ]
  
  

  constructor() 
  { 
    this.filteredData$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(searchTerm => this.filterData(searchTerm))
    );
  }

  filterData(searchTerm: string): any[] {
    if (!searchTerm) {
      return this.data;
    }
    return this.data.filter(item => item.name.includes(searchTerm));
  }


  onSearchInput(event: any) {
    const searchTerm = event.target.value;
    this.searchTerm$.next(searchTerm);
  }
}

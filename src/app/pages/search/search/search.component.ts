import { Component, Input, OnInit } from '@angular/core';
import { ISearchTerms } from 'src/app/models';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {
  searchTerms!: ISearchTerms;
  @Input() data: any[]=[];

  constructor() { }

  ngOnInit() {
    this.initialiseSearchTerms();
  }

  onSearchInput(event:any) {
    const searchText = event.target.value;
    if (searchText) {
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.data.filter((suggestion) =>
        suggestion.name!.toLowerCase().includes(this.searchTerms.searchQuery!.toLowerCase())
      );
    }else {
      this.searchTerms.showSuggestions = false;
    }
  }

  find(suggestion: string){
    this.searchTerms.initial = false;
  }

  initialiseSearchTerms() {
    this.searchTerms= {
      searchQuery:"",
      showSuggestions:false,
      suggestions:[],
      filteredSuggestions:[],
      initial:true,
    }
  }
}

import { ISearchTerms } from "../models";

export class search {
    searchTerms!: ISearchTerms;
    constructor() {}

    onSearchInput(event:any, data: any) {
        const searchText = event.target.value;
        if (searchText) {
          this.searchTerms.showSuggestions = true;
          this.searchTerms.filteredSuggestions = data.filter((suggestion:any) =>
            suggestion.name!.toLowerCase().includes(this.searchTerms.searchQuery!.toLowerCase())
          );
        }else {
          this.searchTerms.showSuggestions = false;
        }
    }
    

    find(query: string){
        this.searchTerms.searchQuery = query;
        this.searchTerms.initial = false;
        this.searchTerms.showSuggestions = false;
        //this.search();
        return this.searchTerms;
    }

    search(data: any) {
        if (this.searchTerms.searchQuery) {
            this.searchTerms.showSuggestions = true;
            this.searchTerms.filteredSuggestions = data.filter((suggestion:any) =>
            suggestion.name!.toLowerCase().includes(this.searchTerms.searchQuery!.toLowerCase())
            );
        }else {
            this.searchTerms.showSuggestions = false;
        }
    }
}
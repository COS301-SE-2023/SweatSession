import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StageOtheruserInfo } from 'src/app/actions';
import { GetUsersAction } from 'src/app/actions/profile.action';
import { IProfileModel, ISearchTerms } from 'src/app/models';
import { OtheruserState } from 'src/app/states';

@Component({
  selector: 'usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss'],
})
export class UsersearchComponent  implements OnInit {

  searchTerms!: ISearchTerms;
  users: IProfileModel[] = [];
  @Select(OtheruserState.returnProfiles) users$!: Observable<IProfileModel[]>;
  constructor(private store:Store) {
    this.initialiseSearchTerms();
  }

  ngOnInit() {}
  
  onSearchInput(event:any) {
    const searchText = event.target.value;
    console.log(searchText)
    if (searchText) {
      this.loadUsers();
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.users.filter((suggestion) =>
        suggestion.displayName!.toLowerCase().includes(searchText.toLowerCase())
      );
    }else {
      this.searchTerms.showSuggestions = false;
    }
  }

  search() {

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

  find(user: any) {
    this.store.dispatch(new StageOtheruserInfo(user));
  }

  loadUsers() {
    this.store.dispatch(new GetUsersAction());
    this.users$.subscribe((response)=>{
      this.users = response;
      console.table(this.users);
    })
  }
}
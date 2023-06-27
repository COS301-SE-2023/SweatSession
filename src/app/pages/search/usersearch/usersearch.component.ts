import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StageOtheruserInfo, SubscribeToAuthState, GetUsersAction} from 'src/app/actions';
import { IProfileModel, ISearchTerms } from 'src/app/models';
import { OtheruserState, AuthState } from 'src/app/states';

@Component({
  selector: 'usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss'],
})
export class UsersearchComponent  implements OnInit {

  searchTerms!: ISearchTerms;
  users: IProfileModel[] = [];
  showNoResults = false;
  userId:string;
  @Select(OtheruserState.returnProfiles) users$!: Observable<IProfileModel[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  constructor(private store:Store) {
    this.initialiseSearchTerms();
  }

  ngOnInit() {this.loadUsers();}
  
  onSearchInput(event:any) {
    const searchText = event.target.value;
    if (searchText) {
      this.loadUsers();
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.users.filter((suggestion) =>
        suggestion.displayName!.toLowerCase().includes(searchText.toLowerCase())
        && suggestion.userId!==this.userId
      );
      if(this.searchTerms.filteredSuggestions!.length==0) {
        this.showNoResults = true;
      }
    }else {
      this.searchTerms.showSuggestions = false;
      this.showNoResults = false;
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
    this.store.dispatch(new SubscribeToAuthState())

    this.userId$.subscribe((response)=>{
      this.userId = response;
    }) 
    this.users$.subscribe((response)=>{
      this.users = response;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetGroups, StageChatGroup, SubscribeToAuthState } from 'src/app/actions';
import { IGroup, ISearchTerms } from 'src/app/models';
import { AuthState, MessagesState } from 'src/app/states';

@Component({
  selector: 'groupsearch',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupSearchComponent  implements OnInit {
  searchTerms!: ISearchTerms;
  groups: IGroup[] = [];
  showNoResults = false;
  userId:string;
  selectedGroup: IGroup = {};
  showGroupPage = false;
  @Select(MessagesState.returnGroups) groups$!: Observable<IGroup[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  constructor(private store:Store) {
    this.initialiseSearchTerms();
  }

  ngOnInit() {this.loadGroups();}
  
  onSearchInput(event:any) {
    const searchText = event.target.value;
    if (searchText) {
      this.loadGroups();
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.groups.filter((suggestion) =>
        suggestion.displayName!.toLowerCase().includes(searchText.toLowerCase())
      );
      if(this.searchTerms.filteredSuggestions!.length==0) {
        this.showNoResults = true;
      }
    }else {
      this.searchTerms.showSuggestions = false;
      this.showNoResults = false;
    }
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

  loadGroups() {
    this.store.dispatch(new GetGroups());
    this.store.dispatch(new SubscribeToAuthState())

    this.userId$.subscribe((response)=>{
      this.userId = response;
    }) 
    this.groups$.subscribe((response)=>{
      this.groups = response;
    })
  }

  selectGroup(group?:IGroup) {
    if(group){
      this.selectedGroup = group;
    }
    this.showGroupPage = !this.showGroupPage;
  }

  stageGroup(group: IGroup, modal: any) {
    modal.dismiss();
    this.store.dispatch(new StageChatGroup(group));
  }
}

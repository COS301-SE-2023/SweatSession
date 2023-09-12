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

  items: IGroup[] = [];
  selectedItems: IGroup[] = [];
  rows: IGroup[][] = [];

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
      this.selectRandomItems();
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

  selectRandomItems() {
    if(this.groups.length>=10){
      const randomIndexes = this.getRandomIndexes(this.groups.length, 10);
      this.selectedItems = randomIndexes.map((index) => this.groups[index]);
      this.rows = this.chunkArray(this.selectedItems, 2);
    }else{
      const randomIndexes = this.getRandomIndexes(this.groups.length, this.groups.length);
      this.selectedItems = randomIndexes.map((index) => this.groups[index]);
      this.rows = this.chunkArray(this.selectedItems, 2);
    }
  }

  getRandomIndexes(max: number, count: number): number[] {
    const indexes: number[] = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }

  chunkArray(array: IGroup[], chunkSize: number): IGroup[][] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

}

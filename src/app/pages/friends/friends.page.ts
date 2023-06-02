import { IFriendsModel, ISearchTerms } from 'src/app/models';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddFriendAction, GetFriendsAction } from 'src/app/actions';
import { FriendsState, FriendsStateModel } from 'src/app/states';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  friends:IFriendsModel[]=[];
  @Select(FriendsState.returnFriends) friends$! : Observable<IFriendsModel[]>;
  searchTerms!: ISearchTerms;
  constructor(private store: Store, private loadingCtrl:LoadingController) { 
    
  }

  ngOnInit() {
    this.initialiseSearchTerms()
    this.displayFriends();
  }

  addFriend() {
    //thsi.store.dispatch(new AddFriendAction(payload));
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

  displayFriends() {
    this.store.dispatch(new GetFriendsAction());
    this.friends$.subscribe((response)=>{
      this.friends = response;
      console.table(this.friends);
    })
  }

  searchSchedule() {
    this.searchTerms.showSuggestions = false;
  }

  async Loading() {
    const loader = await this.loadingCtrl.create({
      message: 'Loading...',
      translucent: true,
      duration: 2000,
    });
    await loader.present();
  }

  onSearchInput(event:any) {
    const searchText = event.target.value;
    if (searchText) {
      this.searchTerms.showSuggestions = true;
      this.searchTerms.filteredSuggestions = this.friends.filter((suggestion) =>
        suggestion.name!.toLowerCase().includes(this.searchTerms.searchQuery!.toLowerCase())
      );
    }else {
      this.searchTerms.showSuggestions = false;
    }
  }

  find(suggestion: string){
    this.Loading();
    console.log(suggestion);
    this.searchTerms.searchQuery = suggestion;
    this.searchTerms.initial = false;
    this.searchSchedule();
  }
}

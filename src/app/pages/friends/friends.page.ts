import { NavController } from '@ionic/angular';
import { IFriendsModel, ISearchTerms } from 'src/app/models';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddFriendAction, GetFriendsAction } from 'src/app/actions';
import { FriendsState, FriendsStateModel } from 'src/app/states';
import { LoadingController } from '@ionic/angular';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  friends:IFriendsModel[]=[];
  @Select(FriendsState.returnFriends) friends$! : Observable<IFriendsModel[]>;
  searchTerms!: ISearchTerms;
  constructor(private store: Store, 
    private loadingCtrl:LoadingController, 
    private nav:NavController,
    private navigation: NavigationService) { }

  ngOnInit() {
    this.initialiseSearchTerms()
    this.displayFriends();
  }

  addFriend() {
    this.nav.navigateRoot("home/search")
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
    this.friends = this.searchTerms.filteredSuggestions!;
  }

  async showLoader() {
    const loader = await this.loadingCtrl.create({
      message: 'Loading...',
      translucent: true,
      duration: 3000
    });
    loader.present();
  }

  async dismissLoader() {
    await this.loadingCtrl.dismiss();
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
    this.searchTerms.searchQuery = suggestion;
    this.searchTerms.initial = false;
    this.searchSchedule();
  }

  back() {
    this.navigation.back();
  }
}

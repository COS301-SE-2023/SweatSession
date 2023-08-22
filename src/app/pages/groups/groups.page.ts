import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetGroup, GetUserGroups, StageChatGroup } from 'src/app/actions';
import { IGroup } from 'src/app/models';
import { MessagesState } from 'src/app/states';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  @Select(MessagesState.returnChatGroups) groups$: Observable<IGroup[]>;
  groups: IGroup[] = [];
  constructor(private store: Store, private nav:NavController) { }

  ngOnInit() {
    this.displayGroups()
  }

  displayGroups() {
    this.store.dispatch(new GetUserGroups())
    this.groups$.subscribe((response)=>{
      this.groups=response;
    })
  }

  stageGroup(selectedGroup: IGroup) {
    this.store.dispatch(new GetGroup(selectedGroup.id))
    this.store.dispatch(new StageChatGroup(selectedGroup));
  }

  addGroup() {
    this.nav.navigateRoot("/home/search");
  }

}

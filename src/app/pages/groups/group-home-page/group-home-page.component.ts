import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { ExitChatGroup, GetGroup, JoinChatGroup, StageChatGroup } from 'src/app/actions';
import { IGroup } from 'src/app/models';
import { AuthState, MessagesState } from 'src/app/states';

@Component({
  selector: 'group-home-page',
  templateUrl: './group-home-page.component.html',
  styleUrls: ['./group-home-page.component.scss'],
})
export class GroupHomePageComponent  implements OnInit {
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  @Select(MessagesState.returnGroup) group$!: Observable<IGroup>;
  @Input() selectedGroup: IGroup;
  @Input() modal:any;
  selectedSegment = "members"
  currentUserId = '';

  constructor(private store: Store) { }

  ngOnInit() {this.initialize()}

  stageGroup() {
    this.modal.dismiss();
    this.store.dispatch(new GetGroup(this.selectedGroup.id))
    this.store.dispatch(new StageChatGroup(this.selectedGroup));
  }

  closeModal() {
    this.modal.dismiss();
  }

  initialize() {
    this.userId$.pipe(
      tap((response)=> this.currentUserId = response),
    ).subscribe()
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }

  isGroupMember() {
    return this.selectedGroup.members?.some((userId)=> userId == this.currentUserId)
  }

  joinGroup() {
    this.store.dispatch(new JoinChatGroup(this.selectedGroup))
  }

  exitGroup() {
    this.store.dispatch(new ExitChatGroup(this.selectedGroup))
  }
}

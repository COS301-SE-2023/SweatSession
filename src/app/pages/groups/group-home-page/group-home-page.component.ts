import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, switchMap, tap } from 'rxjs';
import { ExitChatGroup, GetGroup, JoinChatGroup, LoadGroupHompage, RemoveChatGroup, RemoveGroup, StageChatGroup, StageGroup, SubscribeToAuthState } from 'src/app/actions';
import { IGroup } from 'src/app/models';
import { AuthState, MessagesState } from 'src/app/states';
import { GroupState } from 'src/app/states/group/group.state';

@Component({
  selector: 'group-home-page',
  templateUrl: './group-home-page.component.html',
  styleUrls: ['./group-home-page.component.scss'],
})
export class GroupHomePageComponent  implements OnInit {
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  @Select(GroupState.getGroupId) groupId$!: Observable<string>;
  @Select(GroupState.getGroup) group$!: Observable<IGroup>;
  selectedGroup: IGroup;
  selectedSegment = "members"
  currentUserId = '';
  groupid: string;
  showOptions = false;

  constructor(private store: Store) { }

  ngOnInit() {this.initialize()}

  stageGroup() {
    this.store.dispatch(new GetGroup(this.groupid))
    this.store.dispatch(new StageChatGroup({id: this.groupid}));
  }

  initialize() {
    this.store.dispatch(new LoadGroupHompage());
    this.store.dispatch(new SubscribeToAuthState())

    this.groupId$.pipe(
      tap((response)=> this.groupid = response),
      switchMap(()=> this.userId$),
      tap((response)=> this.currentUserId = response),
      switchMap(()=> this.group$),
      tap((response)=> this.selectedGroup = response)
    ).subscribe()
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }

  isGroupMember() {
    return this.selectedGroup.members?.some((userId)=> userId == this.currentUserId)
  }

  joinGroup() {
    const group = this.selectedGroup;
    this.store.dispatch(new JoinChatGroup(group))
  }

  exitGroup() {
    this.store.dispatch(new ExitChatGroup(this.selectedGroup))
    this.showOptions = false;
  }

  removeGroupSession() {
    this.store.dispatch(new RemoveGroup())
  }

  showGroupOptions() {
    this.showOptions = !this.showOptions;
  }

  deleteGroup() {
    this.store.dispatch(new RemoveChatGroup(this.selectedGroup))
    this.showOptions = false;
  }

  editGroup() {
    this.showOptions = false;
  }

  reportGroup() {
    console.log('report');
    this.showOptions = false;
  }

  removeMember(userid: string) {

  }


  isAdmin() {
    return this.selectedGroup.admin?.includes(this.currentUserId);
  }

  isOwner() {
    return this.selectedGroup?.createBy == this.currentUserId;
  }

  isMember() {
    return this.selectedGroup.members?.includes(this.currentUserId);
  }
}

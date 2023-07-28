import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupHomePageComponent } from './group-home-page.component';
import { NgxsModule, Select, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { IGroup } from 'src/app/models';
import { GetGroup, JoinChatGroup, StageChatGroup, ExitChatGroup } from 'src/app/actions';

describe('GroupHomePageComponent', () => {
  let component: GroupHomePageComponent;
  let fixture: ComponentFixture<GroupHomePageComponent>;
  let storeMock: Partial<Store>;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(() => of('user123')), // Mock the select observables
    };

    await TestBed.configureTestingModule({
      declarations: [GroupHomePageComponent],
      imports: [NgxsModule.forRoot([])],
      providers: [
        { provide: Store, useValue: storeMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupHomePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should dispatch GetGroup and StageChatGroup actions on stageGroup method call', () => {
  //   const selectedGroup: IGroup = { id: 'group1', displayName: 'Group 1', members: ['user123'] };
  //   component.selectedGroup = selectedGroup;

  //   component.stageGroup();

  //   expect(storeMock.dispatch).toHaveBeenCalledWith(new GetGroup(selectedGroup.id));
  //   expect(storeMock.dispatch).toHaveBeenCalledWith(new StageChatGroup(selectedGroup));
  // });

  it('should dismiss the modal on closeModal method call', () => {
    const modalMock = {
      dismiss: jest.fn(),
    };
    component.modal = modalMock;

    component.closeModal();

    expect(modalMock.dismiss).toHaveBeenCalled();
  });

  it('should set the currentUserId on initialize', () => {
    component.initialize();

    expect(component.currentUserId).toBe('user123');
  });

  // it('should return true if the current user is a member of the group', () => {
  //   const selectedGroup: IGroup = { id: 'group1', displayName: 'Group 1', members: ['user123'] };
  //   component.selectedGroup = selectedGroup;

  //   const isGroupMember = component.isGroupMember();

  //   expect(isGroupMember).toBeTruthy();
  // });

  it('should return false if the current user is not a member of the group', () => {
    const selectedGroup: IGroup = { id: 'group1', displayName: 'Group 1', members: ['user456'] };
    component.selectedGroup = selectedGroup;

    const isGroupMember = component.isGroupMember();

    expect(isGroupMember).toBeFalsy();
  });

  it('should dispatch JoinChatGroup action on joinGroup method call', () => {
    const selectedGroup: IGroup = { id: 'group1', displayName: 'Group 1', members: [] };
    component.selectedGroup = selectedGroup;

    component.joinGroup();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new JoinChatGroup(selectedGroup));
  });

  it('should dispatch ExitChatGroup action on exitGroup method call', () => {
    const selectedGroup: IGroup = { id: 'group1', displayName: 'Group 1', members: ['user123'] };
    component.selectedGroup = selectedGroup;

    component.exitGroup();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new ExitChatGroup(selectedGroup));
  });
});

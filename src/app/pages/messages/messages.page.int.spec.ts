import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { StageChatFriend, StageChatGroup } from 'src/app/actions';
import { IChatFriend, IGroup, IProfileModel } from 'src/app/models';
import { MessagesPage } from './messages.page';

describe('MessagesPage', () => {
  let component: MessagesPage;
  let fixture: ComponentFixture<MessagesPage>;
  let mockNavController: Partial<NavController>;
  let mockStore: Partial<Store>;

  const mockChatFriends: IChatFriend[] = [
    {user: { userId: 'user1', name: 'User 1' }},
    {user: { userId: 'user2', name: 'User 2' }},
  ];

  const mockFriendsProfiles: IProfileModel[] = [
    { userId: 'user1', name: 'User 1'},
    { userId: 'user2', name: 'User 2'},
  ];

  const mockGroups: IGroup[] = [
    { id: 'group1', displayName: 'Group 1'},
    { id: 'group2', displayName: 'Group 2'},
  ];

  beforeEach(async () => {
    mockNavController = {
      navigateRoot: jest.fn(),
    };

    mockStore = {
      dispatch: jest.fn(),
      selectSnapshot: jest.fn(),
      select: jest.fn(() => of([])),
    };

    await TestBed.configureTestingModule({
      declarations: [MessagesPage],
      imports: [IonicModule.forRoot(), NgxsModule.forRoot([]), IonicModule],
      providers: [
        { provide: NavController, useValue: mockNavController },
        { provide: Store, useValue: mockStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display chat friends and friends profiles on ngOnInit', () => {
  //   mockStore.selectSnapshot = jest.fn().mockReturnValueOnce(mockChatFriends);
  //   mockStore.selectSnapshot = jest.fn().mockReturnValueOnce(mockFriendsProfiles);
  //   mockStore.select = jest.fn(() => of(mockGroups));

  //   component.ngOnInit();

  //   expect(mockStore.dispatch).toHaveBeenCalledWith(new GetChatFriends());
  //   expect(mockStore.dispatch).toHaveBeenCalledWith(new GetFriendsProfiles());
  //   expect(component.chatFriends).toEqual(mockChatFriends);
  //   expect(component.friends).toEqual(mockFriendsProfiles);
  //   expect(component.noFriends).toBe(false);
  //   expect(component.groups).toEqual(mockGroups);
  // });

  it('should navigate to chatroom on openChat', () => {
    component.openChat({});
    expect(mockNavController.navigateRoot).toHaveBeenCalledWith('/chatroom');
  });

  it('should dispatch StageChatFriend on stageUser', () => {
    const mockUser: IProfileModel = { userId: 'user1', name: 'User 1' };
    component.stageUser(mockUser);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new StageChatFriend(mockUser.userId!));
  });

  it('should dispatch StageChatGroup on stageGroup', () => {
    const mockGroup: IGroup = { id: 'group1', displayName: 'Group 1' };
    component.stageGroup(mockGroup);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new StageChatGroup(mockGroup));
  });
});

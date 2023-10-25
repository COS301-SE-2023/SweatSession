import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { GetChatFriend, GetMessages, RemoveChatFriendSession, StageOtheruserInfo, SubscribeToAuthState } from 'src/app/actions';
import { BackButtonDirectiveModule } from 'src/app/directives';
import { ChatroomComponent } from './chatroom.component';

describe('ChatroomComponent', () => {
  let component: ChatroomComponent;
  let fixture: ComponentFixture<ChatroomComponent>;
  let storeMock: Partial<Store>;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(() => of({})), // Return an empty observable for simplicity
    };

    await TestBed.configureTestingModule({
      declarations: [ChatroomComponent],
      providers: [{ provide: Store, useValue: storeMock }],
      imports: [NgxsModule.forRoot([]),  IonicModule,  BackButtonDirectiveModule,],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatroomComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetChatFriend, GetMessages, and SubscribeToAuthState actions on ngOnInit', () => {
    component.ngOnInit();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new GetChatFriend());
    expect(storeMock.dispatch).toHaveBeenCalledWith(new GetMessages());
    expect(storeMock.dispatch).toHaveBeenCalledWith(new SubscribeToAuthState());
  });

  // it('should dispatch SendMessage action on sendMessage method call', () => {
  //   component.message = { text: 'Hello' };
  //   component.sendMessage();

  //   expect(storeMock.dispatch).toHaveBeenCalledWith(new SendMessage({ text: 'Hello', date: Timestamp.now() }));
  // });

  it('should dispatch RemoveChatFriendSession action on removeSession method call', () => {
    component.removeSession();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new RemoveChatFriendSession());
  });

  it('should dispatch StageOtheruserInfo action on viewOtherUser method call', () => {
    component.friendProfile = { userId: 'user1', name: 'User 1' };
    component.viewOtherUser();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new StageOtheruserInfo({ userId: 'user1', name: 'User 1' }));
  });

  it('should toggle dropdownVisible property on toggleDropdown method call', () => {
    component.dropdownVisible = false;
    component.toggleDropdown();
    expect(component.dropdownVisible).toBe(true);

    component.dropdownVisible = true;
    component.toggleDropdown();
    expect(component.dropdownVisible).toBe(false);
  });
});

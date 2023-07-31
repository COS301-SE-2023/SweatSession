import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupChatroomComponent } from './group-chatroom.component';
import { NgxsModule, Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { IGroup, IMessage } from 'src/app/models';
import { GetGroup, GetGroupMessages, RemoveChatGroupSession, SendGroupMessage, SubscribeToAuthState } from 'src/app/actions';
import { AuthState, MessagesState } from 'src/app/states';
import { IonContent, IonicModule } from '@ionic/angular';
import { Timestamp } from 'firebase/firestore';
import { BackButtonDirectiveModule } from 'src/app/directives';

describe('GroupChatroomComponent', () => {
  let component: GroupChatroomComponent;
  let fixture: ComponentFixture<GroupChatroomComponent>;
  let storeMock: Partial<Store>;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(() => of({})), // Return an empty observable for simplicity
    };

    await TestBed.configureTestingModule({
      declarations: [GroupChatroomComponent],
      imports: [NgxsModule.forRoot([]),  IonicModule,  BackButtonDirectiveModule,],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupChatroomComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetGroup, GetGroupMessages, and SubscribeToAuthState actions on ngOnInit', () => {
    component.ngOnInit();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new GetGroup());
    expect(storeMock.dispatch).toHaveBeenCalledWith(new GetGroupMessages());
    expect(storeMock.dispatch).toHaveBeenCalledWith(new SubscribeToAuthState());
  });

  it('should dispatch SendGroupMessage action on sendMessage method call', () => {
    component.message = { text: 'Hello' };
    component.sendMessage();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new SendGroupMessage({ text: 'Hello', date: Timestamp.now() }));
  });

  it('should toggle isShowMembers property on showMembers method call', () => {
    component.isShowMembers = false;
    component.showMembers();
    expect(component.isShowMembers).toBe(true);

    component.isShowMembers = true;
    component.showMembers();
    expect(component.isShowMembers).toBe(false);
  });

  it('should dispatch RemoveChatGroupSession action on removeSession method call', () => {
    component.removeSession();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new RemoveChatGroupSession());
  });
});

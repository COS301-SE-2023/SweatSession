import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatboxComponent } from './chatbox.component';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { IProfileModel, IMessage } from 'src/app/models';
import { GetOtheruserProfile, StageOtheruserInfo } from 'src/app/actions';
import { MessagesService } from 'src/app/services';
import { IonicModule } from '@ionic/angular';

describe('ChatboxComponent', () => {
  let component: ChatboxComponent;
  let fixture: ComponentFixture<ChatboxComponent>;
  let storeMock: Partial<Store>;
  let serviceMock: Partial<MessagesService>;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(() => of({})), // Return an empty observable for simplicity
    };

    serviceMock = {
      getUser: jest.fn(() => Promise.resolve({ userId: 'user1', name: 'User 1' })),
    };

    await TestBed.configureTestingModule({
      declarations: [ChatboxComponent],
      imports: [ IonicModule],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: MessagesService, useValue: serviceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatboxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user profile if showUser is true', async () => {
    const message: IMessage = { senderId: 'user1', text: 'Hello' };
    component.message = message;
    component.currentUserId = 'user2';
    component.showUser = true;

    await component.ngOnInit();

    expect(serviceMock.getUser).toHaveBeenCalledWith('user1');
    expect(component.profile).toEqual({ userId: 'user1', name: 'User 1' });
  });

  it('should not display the user profile if showUser is false', async () => {
    const message: IMessage = { senderId: 'user1', text: 'Hello' };
    component.message = message;
    component.currentUserId = 'user2';
    component.showUser = false;

    await component.ngOnInit();

    expect(serviceMock.getUser).not.toHaveBeenCalled();
    expect(component.profile).toEqual({});
  });

  it('should dispatch StageOtheruserInfo action on stageUser method call', () => {
    const profile: IProfileModel = { userId: 'user1', name: 'User 1' };
    component.profile = profile;

    component.stageUser();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new StageOtheruserInfo(profile));
  });
});

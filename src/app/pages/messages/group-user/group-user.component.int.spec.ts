import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { GroupUserComponent } from './group-user.component';
import { MessagesService } from 'src/app/services';
import { OtheruserState } from 'src/app/states';
import { IProfileModel } from 'src/app/models';
import { Store } from '@ngxs/store';
import { StageOtheruserInfo } from 'src/app/actions';

describe('GroupUserComponent', () => {
  let component: GroupUserComponent;
  let fixture: ComponentFixture<GroupUserComponent>;
  let mockNavController: Partial<NavController>;
  let mockMessagesService: Partial<MessagesService>;
  let mockProfile$: Partial<Observable<IProfileModel>>;
  let mockStore: Partial<Store>;

  beforeEach(async () => {
    mockNavController = {
      pop: jest.fn(),
    };

    mockMessagesService = {
      getUser: jest.fn().mockResolvedValue({
        userId: 'mockUserId',
        name: 'Mock User',
        
      } as IProfileModel),
    };

    mockProfile$ = of({} as IProfileModel);

    mockStore = {
      dispatch: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [GroupUserComponent],
      providers: [
        { provide: NavController, useValue: mockNavController },
        { provide: MessagesService, useValue: mockMessagesService },
        { provide: OtheruserState.returnOtherUserProfile, useValue: mockProfile$ },
        { provide: Store, useValue: mockStore },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupUserComponent);
    component = fixture.componentInstance;
    component.userId = 'mockUserId';
    component.currentUserId = 'mockCurrentUserId';
    component.modal = {}; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call MessagesService getUser method and set profile on ngOnInit', async () => {
    await component.ngOnInit();
    expect(mockMessagesService.getUser).toHaveBeenCalledWith('mockUserId');
    expect(component.profile).toEqual({
      userId: 'mockUserId',
      name: 'Mock User',
     
    } as IProfileModel);
    expect(component.load).toBe(false);
  });

  // it('should pop the modal and dispatch StageOtheruserInfo on viewOtherUser', () => {
  //   const mockProfile = { userId: 'mockUserId', name: 'Mock User' } as IProfileModel;
  //   component.profile = mockProfile;
  //   const stageOtherUserInfoSpy = jest.spyOn(mockStore, 'dispatch');
  //   component.viewOtherUser();
  //   expect(mockNavController.pop).toHaveBeenCalled();
  //   expect(stageOtherUserInfoSpy).toHaveBeenCalledWith(new StageOtheruserInfo(mockProfile));
  // });
});

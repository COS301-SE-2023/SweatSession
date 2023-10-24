import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { SetProfileService } from 'src/app/services';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { UserprofilePage } from './userprofile.page';

describe('UserprofilePage', () => {
  let component: UserprofilePage;
  let fixture: ComponentFixture<UserprofilePage>;
  let navController: NavController;
  let store: Store;
  let setProfileService: jest.Mocked<SetProfileService>;
  let authApi: jest.Mocked<AuthApi>;

  beforeEach(async () => {
    const navControllerMock = {
      navigateRoot: jest.fn(),
    };

    const storeMock: Partial<Store> = {
      dispatch: jest.fn(),
    };

    const setProfileServiceMock: Partial<SetProfileService> = {
      getProfile: jest.fn(),
    };

    const authApiMock: Partial<AuthApi> = {
      getCurrentUserId: jest.fn().mockResolvedValue('mockUserId'),
    };

    await TestBed.configureTestingModule({
      declarations: [UserprofilePage],
      providers: [
        { provide: NavController, useValue: navControllerMock },
        { provide: Store, useValue: storeMock },
        { provide: SetProfileService, useValue: setProfileServiceMock },
        { provide: AuthApi, useValue: authApiMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserprofilePage);
    component = fixture.componentInstance;
    navController = TestBed.inject(NavController);
    store = TestBed.inject(Store);
    setProfileService = TestBed.inject(
        SetProfileService
    ) as jest.Mocked<SetProfileService>;
    authApi = TestBed.inject(AuthApi) as jest.Mocked<AuthApi>;
  });


  it('should navigate to the leaderboard page', () => {
    component.Leaderboard();

    expect(navController.navigateRoot).toHaveBeenCalledWith('/home/leaderboard');
  });

  it('should navigate to the friends page', () => {
    component.Friends();

    expect(navController.navigateRoot).toHaveBeenCalledWith('/friends');
  });

  it('should navigate to the groups page', () => {
    component.Groups();

    expect(navController.navigateRoot).toHaveBeenCalledWith('/groups');
  });

  it('should navigate to the workout scheduling page', () => {
    component.Schedule();

    expect(navController.navigateRoot).toHaveBeenCalledWith('/workout-scheduling');
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { IProfileModel } from 'src/app/models';
import { StageOtheruserInfo } from 'src/app/actions';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let storeMock: Partial<Store>;
  let navMock: Partial<NavController>;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(() => of({})), // Return an empty observable for simplicity
    };
    navMock = {
      navigateRoot: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: NavController, useValue: navMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to userprofile when isCurrentUser is true', () => {
    component.isCurrentUser = true;
    component.viewOtherUser();

    expect(navMock.navigateRoot).toHaveBeenCalledWith('/userprofile');
    expect(storeMock.dispatch).not.toHaveBeenCalled();
  });

  it('should dispatch StageOtheruserInfo action when isCurrentUser is false', () => {
    const user: IProfileModel = { userId: 'user1', name: 'User 1' };
    component.user = user;
    component.viewOtherUser();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new StageOtheruserInfo(user));
    expect(navMock.navigateRoot).not.toHaveBeenCalled();
  });
});

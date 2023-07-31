// import { IonicModule } from '@ionic/angular';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UserComponent } from './user.component';
// import { NavController } from '@ionic/angular';
// import { Store } from '@ngxs/store';
// import { of } from 'rxjs';
// import { IProfileModel } from 'src/app/models';
// import { StageOtheruserInfo } from 'src/app/actions';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;
//   let storeMock: Partial<Store>;
//   let navMock: Partial<NavController>;

//   beforeEach(async () => {
//     storeMock = {
//       dispatch: jest.fn(),
//       select: jest.fn(() => of({})), // Return an empty observable for simplicity
//     };
//     navMock = {
//       navigateRoot: jest.fn(),
//     };

//     await TestBed.configureTestingModule({
//       declarations: [UserComponent],
//       imports: [
//         IonicModule,
//       ],
//       providers: [
//         { provide: Store, useValue: storeMock },
//         { provide: NavController, useValue: navMock },
//       ],
//     }).compileComponents();

//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to userprofile when isCurrentUser is true', () => {
//     component.isCurrentUser = true;
//     component.viewOtherUser();

//     expect(navMock.navigateRoot).toHaveBeenCalledWith('/userprofile');
//     expect(storeMock.dispatch).not.toHaveBeenCalled();
//   });

//   it('should dispatch StageOtheruserInfo action when isCurrentUser is false', () => {
//     const user: IProfileModel = { userId: 'user1', name: 'User 1' };
//     component.user = user;
//     component.viewOtherUser();

//     expect(storeMock.dispatch).toHaveBeenCalledWith(new StageOtheruserInfo(user));
//     expect(navMock.navigateRoot).not.toHaveBeenCalled();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { IonicModule, NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { IProfileModel } from 'src/app/models';
import { BadgesApi } from 'src/app/states/badges/badges.api';
import { StageOtheruserInfo, SubscribeToAuthState } from 'src/app/actions';
import { IBadges } from 'src/app/models/badges.model';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let storeMock: Partial<Store>;
  let navMock: Partial<NavController>;
  let badgesApiMock: Partial<BadgesApi>;

  const user: IProfileModel = { userId: 'user1', name: 'User 1' };
  const badges: IBadges = { receivedBadges: [1, 2] };

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(() => of('user1')), // Mocking the getCurrUserId selector
    };

    navMock = {
      navigateRoot: jest.fn(),
    };

    badgesApiMock = {
      otheruserbadges$: jest.fn().mockReturnValue(of(badges)),
    };

    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: NavController, useValue: navMock },
        { provide: BadgesApi, useValue: badgesApiMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
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
    component.isCurrentUser = false;
    component.viewOtherUser();

    expect(storeMock.dispatch).toHaveBeenCalledWith(new StageOtheruserInfo(user));
    expect(navMock.navigateRoot).not.toHaveBeenCalled();
  });
});

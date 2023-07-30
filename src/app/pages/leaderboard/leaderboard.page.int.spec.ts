import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderboardPage } from './leaderboard.page';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { IFriendsModel, IProfileModel } from 'src/app/models';
import { PointsApi } from 'src/app/states';

describe('LeaderboardPage', () => {
  let component: LeaderboardPage;
  let fixture: ComponentFixture<LeaderboardPage>;
  let storeMock: Partial<Store>;
  let pointsApiMock: Partial<PointsApi>;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
      select: jest.fn(() => of([])),
    };
    pointsApiMock = {
      otherUserPoints$: jest.fn(() => of({ userPoints: 100 })),
    };

    await TestBed.configureTestingModule({
      declarations: [LeaderboardPage],
      imports: [
        IonicModule,
        NgxsModule.forRoot([])],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: PointsApi, useValue: pointsApiMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderboardPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call initialize method on ngOnInit', () => {
    jest.spyOn(component, 'initialize');
    component.ngOnInit();
    expect(component.initialize).toHaveBeenCalled();
  });

  it('should update friends list on updateFriends method call', () => {
    const friends: IFriendsModel[] = [{ userId: 'user1' }, { userId: 'user2' }];
    const users: IProfileModel[] = [
      { userId: 'user1', points: 100 },
      { userId: 'user2', points: 200 },
    ];
    component.users = users;
    component.userId = 'user1';
    component.updateFriends(friends);

    expect(component.friends).toEqual([users[0]]);
  });

  // it('should sort friends list in descending order of points on sort method call', () => {
  //   const users: IProfileModel[] = [
  //     { userId: 'user1', points: 100 },
  //     { userId: 'user2', points: 200 },
  //   ];
  //   component.friends = users;

  //   jest.spyOn(component, 'sort');
  //   component.sort();

  //   expect(component.sort).toHaveBeenCalled();
  //   expect(component.friends).toEqual([users[1], users[0]]);
  // });

  it('should return true if the user is the current user', () => {
    component.userId = 'user1';
    const user: IProfileModel = { userId: 'user1' };

    const result = component.isCurrentUser(user);

    expect(result).toBeTruthy();
  });

  it('should return false if the user is not the current user', () => {
    component.userId = 'user1';
    const user: IProfileModel = { userId: 'user2' };

    const result = component.isCurrentUser(user);

    expect(result).toBeFalsy();
  });
});

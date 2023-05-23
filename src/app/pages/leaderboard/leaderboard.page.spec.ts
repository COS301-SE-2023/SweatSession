import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LeaderboardPage } from './leaderboard.page';

describe('LeaderboardPage', () => {
  let component: LeaderboardPage;
  let fixture: ComponentFixture<LeaderboardPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LeaderboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

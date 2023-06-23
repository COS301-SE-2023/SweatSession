import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherUserBadgesPage } from './other-user-badges.page';

describe('OtherUserBadgesPage', () => {
  let component: OtherUserBadgesPage;
  let fixture: ComponentFixture<OtherUserBadgesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtherUserBadgesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

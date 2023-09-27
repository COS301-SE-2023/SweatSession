import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserManualPage } from './user-manual.page';

describe('UserManualPage', () => {
  let component: UserManualPage;
  let fixture: ComponentFixture<UserManualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

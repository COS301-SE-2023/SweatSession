import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GroupsPage } from './groups.page';

describe('GroupsPage', () => {
  let component: GroupsPage;
  let fixture: ComponentFixture<GroupsPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(GroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

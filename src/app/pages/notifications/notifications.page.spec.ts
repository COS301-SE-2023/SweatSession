import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { NotificationsPage } from './notifications.page';

describe('NotificationsPage', () => {
  let component: NotificationsPage;
  let fixture: ComponentFixture<NotificationsPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(NotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

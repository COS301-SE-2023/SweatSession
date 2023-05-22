import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MessagesPage } from './messages.page';

describe('HomePage', () => {
  let component: MessagesPage;
  let fixture: ComponentFixture<MessagesPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(MessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChatbotPage } from './chatbot.page';

describe('ChatbotPage', () => {
  let component: ChatbotPage;
  let fixture: ComponentFixture<ChatbotPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ChatbotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

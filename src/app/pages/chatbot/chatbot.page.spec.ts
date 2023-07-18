// Import the required dependencies for testing
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ChatbotPage } from './chatbot.page';
import { ChatbotService } from 'src/app/services/chatbot/chatbot.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ChatbotPage', () => {
  let component: ChatbotPage;
  let fixture: ComponentFixture<ChatbotPage>;
  let chatbotService: ChatbotService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatbotPage],
      providers: [ChatbotService], // Provide the required services
      imports: [HttpClientModule], // Import HttpClientModule to provide HttpClient
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotPage);
    component = fixture.componentInstance;
    chatbotService = TestBed.inject(ChatbotService); // Inject the ChatbotService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct default values', () => {
    expect(component.loading).toBeFalsy();
    expect(component.userMessage).toBe('');
    expect(component.messages).toEqual([]);
  });

  it('should correctly identify health-related messages', () => {
    const healthMessages = [
      'I have a health-related question.',
      'Tell me about nutrition.',
      'What exercises are good for health?',
      // Add more health-related messages here
    ];

    const nonHealthMessages = [
      'What is the weather like today?',
      'Can you tell me a joke?',
      'How far is the moon?',
      // Add more non-health-related messages here
    ];

    healthMessages.forEach((message) => {
      expect(component.isHealthRelated(message)).toBeTruthy();
    });

    nonHealthMessages.forEach((message) => {
      expect(component.isHealthRelated(message)).toBeFalsy();
    });
  });

 
});

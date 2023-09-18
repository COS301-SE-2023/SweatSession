// chatbot.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChatbotService } from './chatbot.service';
import { environment } from 'src/environments/environment'; 

describe('ChatbotService', () => {
  let service: ChatbotService;
  let httpClientMock: jest.Mocked<HttpClient>;

  beforeEach(() => {
    httpClientMock = {
      post: jest.fn(),
    } as unknown as jest.Mocked<HttpClient>;

    TestBed.configureTestingModule({
      providers: [
        ChatbotService,
        { provide: HttpClient, useValue: httpClientMock },
      ],
    });
    service = TestBed.inject(ChatbotService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Your test cases go here
  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  
  it('should handle an API error gracefully', (done) => {
    const userMessage = { text: 'Hello!', sender: 'user' };
  
    httpClientMock.post.mockReturnValue(
      // Simulate an error response
      of(undefined).pipe(
        tap(() => {
          throw new Error('API error');
        })
      )
    );
  
    service.sendMessage(userMessage).subscribe(
      () => {
        // The subscribe function should not be called in case of an error
        fail('Expected an error, but got a successful response');
      },
      (error) => {
        expect(error.message).toBe('API error');
  
        // Assert that the conversation history has been updated even in case of an error
        expect(service['conversation']).toEqual([
          { role: 'system', content: 'You are a helpful AI assistant.' },
          { role: 'user', content: 'Hello!' },
        ]);
  
        done();
      }
    );
  });
  



});

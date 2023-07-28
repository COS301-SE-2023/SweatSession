import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private conversation = [
    { role: 'system', content: 'You are a helpful AI assistant.' },
  ];

  constructor(private http: HttpClient) { }

  sendMessage(userMessage: { text: string, sender: string }) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${environment.openai_api_key}`);
  
    this.conversation.push({ role: userMessage.sender, content: userMessage.text});

    const body = {
        model: 'gpt-3.5-turbo',
        messages: this.conversation,
        temperature: 0.95,        
    };
  
    return this.http.post(environment.openai_endpoint, body, { headers }).pipe(
      tap((response: any) => {
        this.conversation.push({ role: 'assistant', content: response.choices[0].message.content });
      })
    );
  }
}

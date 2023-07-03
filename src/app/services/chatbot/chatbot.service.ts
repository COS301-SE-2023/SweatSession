import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }

  sendMessage(userMessage: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${environment.openai_api_key}`);
    const body = {
        prompt: userMessage,
        max_tokens: 60
    };
    return this.http.post(environment.openai_endpoint, body, { headers });
}
}

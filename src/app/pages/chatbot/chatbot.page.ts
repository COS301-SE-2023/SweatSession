import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../services/chatbot/chatbot.service';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss','../global.scss'],
})
export class ChatbotPage implements OnInit {

  userMessage = '';
  messages: { text: string, sender: string }[] = [];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
  }

  sendUserMessage() {
    if (this.userMessage.trim() !== '') {
        this.messages.push({ text: this.userMessage, sender: 'user' });
        this.chatbotService.sendMessage(this.userMessage).subscribe((response: any) => {
            this.messages.push({ text: response.choices[0].text, sender: 'bot' });
        });
        this.userMessage = '';
    }
}

}

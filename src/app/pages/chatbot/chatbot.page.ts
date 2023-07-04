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
      const newMessage = { text: this.userMessage, sender: 'user' };
      this.messages.push(newMessage);
      this.chatbotService.sendMessage(newMessage).subscribe((response: any) => {
        const botMessage = response.choices[0].message.content;
        this.messages.push({ text: botMessage, sender: 'bot' });
      });
      this.userMessage = '';
    }
  }
}

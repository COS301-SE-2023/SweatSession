import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot/chatbot.service'; 


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss','../global.scss'],
})
export class ChatbotPage implements OnInit {

  loading: boolean = false;

  userMessage = '';
  messages: { text: string, sender: string }[] = [];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
  }

  sendUserMessage() {
    if (this.userMessage.trim() !== '') {
      const newMessage = { text: this.userMessage, sender: 'user' };
      this.messages.push(newMessage);
      this.loading = true;
      this.chatbotService.sendMessage(newMessage).subscribe((response: any) => {
        this.loading = false;
        const botMessage = response.choices[0].message.content;
        console.log(botMessage);
        if (this.isHealthRelated(botMessage)){
          this.messages.push({ text: botMessage, sender: 'SS-bot' });
        }else{
          this.messages.push({ text: 'Sorry, I can only answer health-related questions.', sender: 'SS-bot' });
        }
        
      });
      this.userMessage = '';
    }
  }

 

  isHealthRelated(text: string): boolean {
    // You can implement your own logic here to determine if the text is health-related
    // This is just a basic example
    const healthKeywords = ['health', 'medical', 'veg', 'nutrition' , 'fit' , 'exercise' , 'diet' , 'calories' , 'food' , 'fruit' , 'gym' ,  'kilojoule' , 'routine' , 'work' , 'Hi' , 'schedule' , 'plan' , 'meal' , 'track'];
    text = text.toLowerCase();
    return healthKeywords.some(keyword => text.includes(keyword));
  }

  async simulateDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

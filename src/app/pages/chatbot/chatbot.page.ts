import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot/chatbot.service'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProfileService } from '../../services';
import { getAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss','../global.scss'],
})
export class ChatbotPage implements OnInit {

  loading: boolean = false;
  currUserId: string | undefined | null;

  userMessage = '';
  messages: { text: string, sender: string, displayText?: string }[] = [];

  constructor(private chatbotService: ChatbotService, private firestore: AngularFirestore, private profileService: ProfileService) {}

  ngOnInit() {
    this.setupProfile();
  }

  async setupProfile() {
    const auth = getAuth();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currUserId = user.uid;
        sessionStorage.setItem('currUserId', this.currUserId);
      } else {
        this.currUserId = sessionStorage.getItem('currUserId');
      }
    });
  }

  private async getUserHealthData(displayName: string) {
    const snapshot = await this.firestore.collection('healthdata', ref => ref.where('displayName', '==', displayName)).get().toPromise();
    if (!snapshot) {
      return null;
    } else {
      const data:any = snapshot.docs[0].data();
      const formattedData = `The user's height is ${data['height']} cm, weight is ${data?.['weight']} kg, diet is ${data?.['diet']}, and the medical conditions are ${data?.['medicalConditions']} and their workout comittment level is ${data?.['workoutCommitment']}.`;
      return formattedData;
    }
  }
  

  async sendUserMessage() {
    if (this.userMessage.trim() !== '') {

      const userProfile = await this.profileService.getProfile({ userId: this.currUserId! }).toPromise();
      const displayName = userProfile?.profile.displayName;
      var healthData = null;

      if (displayName){
        healthData = await this.getUserHealthData(displayName);
      }
      let newMessage = { text: this.userMessage, sender: 'user', displayText: this.userMessage };
  
      if(healthData) {
        newMessage.text += '\nUser Health Data: ' + healthData;
      }
      
      this.messages.push(newMessage);
      this.loading = true;
      this.chatbotService.sendMessage(newMessage).subscribe((response: any) => {
        this.loading = false;
        const botMessage = response.choices[0].message.content;
        console.log(botMessage);
        if (this.isHealthRelated(botMessage)){
          this.messages.push({ text: botMessage, sender: 'SS-bot', displayText: botMessage });
        }else{
          this.messages.push({ text: 'Sorry, I can only answer health-related questions.', sender: 'SS-bot' , displayText: 'Sorry, I can only answer health-related questions.'});
        }
        
      });
      this.userMessage = '';
    }
  }
  
  isHealthRelated(text: string): boolean {
    const healthKeywords = ['health', 'medical', 'veg', 'nutrition' , 'fit' , 'exercise' , 'diet' , 'calories' , 'food' , 'fruit' , 'gym'  , 'kilojoule' , 'routine' , 'workout' , 'Hi' , 'work-out' ];
    text = text.toLowerCase();
    return healthKeywords.some(keyword => text.includes(keyword));
  }

  async simulateDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  isText() {
    return this.userMessage.trim()!== '';
  }
}

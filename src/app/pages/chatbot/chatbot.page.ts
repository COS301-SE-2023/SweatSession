import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot/chatbot.service'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProfileService } from '../../services';
import { getAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  loading: boolean = false;
  currUserId: string | undefined | null;
  isBlurred: boolean = false;
  private ngUnsubscribe = new Subject();

  userMessage = '';
  messages: { text: string, sender: string, displayText?: string }[] = [];

  constructor(private chatbotService: ChatbotService, private firestore: AngularFirestore, private profileService: ProfileService) {}

  ngOnInit() {
    this.setupProfile();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
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

  private async getUserHealthData(userId: string) {
    const snapshot = await this.firestore.collection('healthdata', ref => ref.where('userId', '==', userId)).get().toPromise();
    if (snapshot?.empty) {
      return null;
    } else {
      const data: any = snapshot?.docs[0].data();
      const formattedData = `The user's height is ${data['height']} cm, weight is ${data?.['weight']} kg, diet is ${data?.['diet']}, and the medical conditions are ${data?.['medicalConditions']} and their workout commitment level is ${data?.['workoutCommitment']}.`;
      return formattedData;
    }
  }
  

  async sendUserMessage() {
    if (this.userMessage.trim() !== '') {
      this.toggleBlurEffect();
      const userProfile = await this.profileService.getProfile({ userId: this.currUserId! }).toPromise();
      var healthData = null;

      if (this.currUserId){
        healthData = await this.getUserHealthData(this.currUserId);
      }
      let newMessage = { text: this.userMessage, sender: 'user', displayText: this.userMessage };
      this.messages.push(newMessage);

      if(healthData) {
        newMessage.text += '\nUser Health Data: ' + healthData;
      } else {
        this.messages.push({
          text: 'Please fill in the health data form before asking any health-related queries.',
          sender: 'SS-bot',
          displayText: 'Please fill in the health data form before asking any health-related queries. This can be done on your profile underneath the "Health Data" widget.'
        });
        this.userMessage = '';
        return;
      }
      
      this.loading = true;
      this.chatbotService.sendMessage(newMessage).pipe(takeUntil(this.ngUnsubscribe)).subscribe((response: any) => {
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

  toggleBlurEffect() {
    if (!this.isBlurred) {
      this.isBlurred = true;
    }
  }
}

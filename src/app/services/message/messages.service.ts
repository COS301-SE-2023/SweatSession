import { Injectable } from '@angular/core';
import { IDeleteMessage, IGetChatFriends, IGetMessages, ISendMessage } from 'src/app/models';
import { MessageRepository } from 'src/app/repository';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private repository: MessageRepository) { }

  async sendMessage(request: ISendMessage) {
    return this.repository.sendMessage(request);
  }

  async getChatFriends(request: IGetChatFriends) {
    return this.repository.getChatFriends(request);
  }

  async getMessages(request: IGetMessages) {
    return this.repository.getMessages(request);
  }

  async deleteMessage(request: IDeleteMessage) {
    return this.repository.deleteMessage(request);
  }
}

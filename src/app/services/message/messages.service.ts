import { Injectable } from '@angular/core';
import { IAddChatGroup, IDeleteMessage, IGetChatFriends, IGetGroups, IGetMessages, ISendMessage } from 'src/app/models';
import { MessageRepository } from 'src/app/repository';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private repository: MessageRepository) { }

  async sendMessage(request: ISendMessage) {
    return this.repository.sendMessage(request);
  }

  async sendGroupMessage(request: ISendMessage) {
    return this.repository.sendGroupMessage(request);
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

  async getProfile(request: string) {
    return this.repository.getProfile(request);
  }

  async getGroups(request: IGetGroups) {
    return this.repository.getGroups(request);
  }

  async addChatGroup(request: IAddChatGroup) {
    return this.repository.addChatGroup(request);
  }
}

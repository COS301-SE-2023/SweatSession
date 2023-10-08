import { Injectable } from '@angular/core';
import { IAddChatGroup, IDeleteMessage, IExitChatGroup, IGetChatFriends, IGetGroups, IGetMessages, IJoinGroup, IRemoveChatGroup, IRemoveChatGroupUser, ISendMessage } from 'src/app/models';
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

  async getUserGroups(request: IGetGroups) {
    return this.repository.getUserGroups(request);
  }

  async getGroups(request: IGetGroups) {
    return this.repository.getGroups(request);
  }

  async addChatGroup(request: IAddChatGroup) {
    return this.repository.addChatGroup(request);
  }

  async joinChatGroup(request: IJoinGroup) {
    return this.repository.joinChatGroup(request);
  }

  async removeChatGroup(request: IRemoveChatGroup) {
    return this.repository.removeChatGroup(request);
  }

  async exitChatGroup(request: IExitChatGroup) {
    return this.repository.exitChatGroup(request);
  }

  async getUser(userId: string) {
    return this.repository.getUser(userId);
  }

  async removeChatGroupUser(request: IRemoveChatGroupUser) {
    return this.repository.removeChatGroupUser(request);
  }
}

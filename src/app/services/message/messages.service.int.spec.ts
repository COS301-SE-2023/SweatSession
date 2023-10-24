import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  IGetChatFriends,
  IMessage,
  IProfileModel,
  ISendMessage
} from 'src/app/models';
import { MessageRepository } from 'src/app/repository';
import { MessagesService } from './messages.service';

const mockChat: IMessage = {
  id: "messageId"
}

// Define mock data for requests and responses
const mockSendMessageRequest: ISendMessage = {
 chat: mockChat
};

const mockGetChatFriendsRequest: IGetChatFriends = {
  userId: "testId"
}

const mockProfile: IProfileModel = {
  userId:"userId1"
}

// Mock the MessageRepository
const messageRepositoryMock = {
  sendMessage: jest.fn((request: ISendMessage) => of(/* Mock the response here */)),
  sendGroupMessage: jest.fn(() => of(/* Mock the response here */)),
  getChatFriends: jest.fn(() => of(/* Mock the response here */)),
  getMessages: jest.fn(() => of(/* Mock the response here */)),
  deleteMessage: jest.fn(() => of(/* Mock the response here */)),
  getProfile: jest.fn(() => of(mockProfile)),
  getUserGroups: jest.fn(() => of(/* Mock the response here */)),
  getGroups: jest.fn(() => of(/* Mock the response here */)),
  addChatGroup: jest.fn(() => of(/* Mock the response here */)),
  joinChatGroup: jest.fn(() => of(/* Mock the response here */)),
  removeChatGroup: jest.fn(() => of(/* Mock the response here */)),
  exitChatGroup: jest.fn(() => of(/* Mock the response here */)),
  getUser: jest.fn(() => of(/* Mock the response here */)),
};

describe('MessagesService', () => {
  let messagesService: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessagesService,
        { provide: MessageRepository, useValue: messageRepositoryMock },
      ],
    });

    messagesService = TestBed.inject(MessagesService);
  });

  it('should call sendMessage method of repository', async () => {
    messagesService.sendMessage(mockSendMessageRequest).then(()=>{
      expect(messageRepositoryMock.sendMessage).toHaveBeenCalledWith(mockSendMessageRequest);
    })
  });

  it('should return the expected data from getProfile method', async () => {
    const mockUserId = 'userId1';
    // Call the method
    messagesService.getProfile(mockUserId).then((results)=>{
      expect(results.userId).toEqual("userId1");
    });
  });
});

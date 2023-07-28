import { TestBed } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MessageRepository } from './message.repository';
import { of } from 'rxjs';
import { IMessage, IProfileModel } from '../models';

let messageRepository: MessageRepository;
const mockProfileData: IProfileModel = {
  userId: 'userId1',
  // Add other properties as needed
};

const angularFirestoreMock = {
  collection: jest.fn((request?: string) => ({
    doc: jest.fn((request?: string) => ({
      set: jest.fn(),
      ref: { id: 'messageId' },
      get: jest.fn(() => of({
        data: jest.fn(() => mockProfileData),
      })),
    })),
  })),
  set: jest.fn(),
  // collection: jest.fn().mockReturnThis(),
  doc: jest.fn(),
  snapshotChanges: jest.fn(() => of([])),
  delete: jest.fn().mockResolvedValueOnce({}),
  update: jest.fn().mockReturnValue(of({})),
};



describe('sendChatMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageRepository,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
      ],
    });
  
    messageRepository = TestBed.inject(MessageRepository);
  });
  it('should send a message and update collections', async () => {
    // Mock the ISendMessage request object
    const request = {
      chat: {
        senderId: 'senderId',
        receiverId: 'receiverId',
      },
    };

    // Call the method
   messageRepository.sendMessage(request).then(()=>{
    // Verify Firestore methods were called with the correct arguments
    expect(angularFirestoreMock.collection).toHaveBeenCalledWith('messages/senderId/receiverId');
    expect(angularFirestoreMock.collection).toHaveBeenCalledWith('messages/receiverId/senderId');
    expect(angularFirestoreMock.collection).toHaveBeenCalledWith(`users/senderId/chatFriends`);
    expect(angularFirestoreMock.collection).toHaveBeenCalledWith(`users/receiverId/chatFriends`);

    // Verify set method was called with the correct data

    expect(angularFirestoreMock.doc).toHaveBeenCalledWith(`${request.chat.senderId}`);
    expect(angularFirestoreMock.doc).toHaveBeenCalledWith(`${request.chat.receiverId}`);

    // Verify user collection update
    expect(angularFirestoreMock.collection().doc().set).toHaveBeenCalledWith({
      userId: 'receiverId',
      lastChatId: 'messageId', // This value is hardcoded as 'messageId' because we mocked it in the Firestore ref
    });

    expect(angularFirestoreMock.collection().doc().set).toHaveBeenCalledWith({
      userId: 'senderId',
      lastChatId: 'messageId', // This value is hardcoded as 'messageId' because we mocked it in the Firestore ref
    });
   });
  });

});

describe('sendGroupMessage', () => {
  it('should send a group message', async () => {
    // Mock the ISendMessage request object
    const request = {
      chat: {
        receiverId: 'groupId',
      },
    };
  
    // Call the method
   messageRepository.sendGroupMessage(request).then(()=>{
    expect(angularFirestoreMock.collection).toHaveBeenCalledTimes(1);
    expect(angularFirestoreMock.collection).toHaveBeenCalledWith('groups/groupId/messages');

    expect(angularFirestoreMock.collection('groups/groupId/messages').doc).toHaveBeenCalled();
  
    // Verify set method was called with the correct data
    expect(angularFirestoreMock.collection('groups/groupId/messages').doc().set).toHaveBeenCalled();
    expect(angularFirestoreMock.collection('groups/groupId/messages').doc().set).toHaveBeenCalledWith(request.chat);
   });
  });
})


describe('GetMessages', () => {
  const angularFirestoreCollectionMock = {
    snapshotChanges: jest.fn(() => of([
      { payload: { doc: { id: 'messageId1', data: jest.fn(() => ({ /* Message data for messageId1 */ })) } } },
      { payload: { doc: { id: 'messageId2', data: jest.fn(() => ({ /* Message data for messageId2 */ })) } } },
    ])),
  };
  
  const angularFirestoreMock = {
    collection: jest.fn((path) => {
      if (path === 'messages/userId/otheruserId') {
        return angularFirestoreCollectionMock;
      } else {
        return {
          snapshotChanges: jest.fn(() => of([
            { payload: { doc: { id: 'groupMessageId1', data: jest.fn(() => ({ /* Group message data for groupMessageId1 */ })) } } },
            { payload: { doc: { id: 'groupMessageId2', data: jest.fn(() => ({ /* Group message data for groupMessageId2 */ })) } } },
          ])),
        };
      }
    }),
  };
  
  let messageRepository: MessageRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageRepository,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
      ],
    });

    messageRepository = TestBed.inject(MessageRepository);
  });

  it('should get messages for a user', (done) => {
    const request = {
      userId: 'userId',
      otheruserId: 'otheruserId',
      isGroup: false,
    };

    // Call the method and subscribe to the result
    messageRepository.getMessages(request).subscribe((response) => {
      expect(response.validate).toBe(true);
      expect(response.chats![0].id).toBe('messageId1');
      expect(response.chats![1].id).toBe('messageId2');
      done();
    });
  });

  it('should get messages for a group', (done) => {
    const request = {
      otheruserId: 'groupId',
      isGroup: true,
    };

    // Call the method and subscribe to the result
    messageRepository.getMessages(request).subscribe((response) => {
      expect(response.validate).toBe(true);
      expect(response.chats![0].id).toBe('groupMessageId1');
      expect(response.chats![1].id).toBe('groupMessageId2');

      done();
    });
  });
});

// describe('getUserProfile', () => {
//   let messageRepository: MessageRepository;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         MessageRepository,
//         { provide: AngularFirestore, useValue: angularFirestoreMock },
//       ],
//     });

//     messageRepository = TestBed.inject(MessageRepository);
//   });

//   it('should get a user profile', async () => {
//     const userId = 'userId1';

//     // Call the method
//     const profile = await messageRepository.getUser(userId);

//     // Verify the data returned by the method
//     expect(profile).toEqual(mockProfileData);
//   });
// });
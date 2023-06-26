import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { FriendComponent } from './friend.component';
import { StageOtheruserInfo, RemoveFriendAction } from 'src/app/actions';
import { IFriendsModel } from 'src/app/models';

describe('FriendComponent', () => {
  let friendComponent: FriendComponent;
  let navControllerMock: any;
  let storeMock: any;
  const friendMock: IFriendsModel = { userId: 'test_id', name: 'Friend 1' , profileURL: 'assets/Asset 2.png'};

  beforeEach(() => {
    navControllerMock = {
      navigateForward: jest.fn(),
    };
    storeMock = {
      dispatch: jest.fn(),
    };
    friendComponent = new FriendComponent(navControllerMock, storeMock);
  });

  describe('viewOtherUser', () => {
    it('should dispatch StageOtheruserInfo action with the friend', () => {
      friendComponent.friend = friendMock;

      friendComponent.viewOtherUser();

      expect(storeMock.dispatch).toHaveBeenCalledWith(new StageOtheruserInfo(friendMock));
    });
  });

  describe('removeFriend', () => {
    it('should dispatch RemoveFriendAction action with the friend', () => {
      friendComponent.friend = friendMock;

      friendComponent.removeFriend();

      expect(storeMock.dispatch).toHaveBeenCalledWith(new RemoveFriendAction(friendMock));
    });
  });
});

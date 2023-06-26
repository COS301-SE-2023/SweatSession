import { LoadingController, NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { FriendsPage } from './friends.page';
import { GetFriendsAction } from 'src/app/actions';
import { of } from 'rxjs';

describe('FriendsPage', () => {
  let friendsPage: FriendsPage;
  let storeMock: any;
  let navControllerMock: any;

  beforeEach(() => {
    storeMock = {
      dispatch: jest.fn(),
      selectSnapshot: jest.fn(),
    };
    navControllerMock = {
      navigateRoot: jest.fn(),
    };
    friendsPage = new FriendsPage(storeMock, navControllerMock);
  });

  describe('ngOnInit', () => {
    it('should call initialiseSearchTerms and displayFriends', () => {
      const initialiseSearchTermsSpy = jest.spyOn(friendsPage, 'initialiseSearchTerms');
      const displayFriendsSpy = jest.spyOn(friendsPage, 'displayFriends');

      friendsPage.ngOnInit();

      expect(initialiseSearchTermsSpy).toHaveBeenCalled();
      expect(displayFriendsSpy).toHaveBeenCalled();
    });
  });

  describe('addFriend', () => {
    it('should navigate to "home/search"', () => {
      friendsPage.addFriend();

      expect(navControllerMock.navigateRoot).toHaveBeenCalledWith('home/search');
    });
  });

  describe('initialiseSearchTerms', () => {
    it('should initialise searchTerms', () => {
      friendsPage.initialiseSearchTerms();

      expect(friendsPage.searchTerms.searchQuery).toEqual('');
      expect(friendsPage.searchTerms.showSuggestions).toBe(false);
      expect(friendsPage.searchTerms.suggestions).toEqual([]);
      expect(friendsPage.searchTerms.filteredSuggestions).toEqual([]);
      expect(friendsPage.searchTerms.initial).toBe(true);
    });
  });

  describe('displayFriends', () => {
    it('should dispatch GetFriendsAction and update friends', () => {
      const mockResponse = [{ userId: 'test_id', name: 'Friend 1', profileURL: 'assets/Asset 2.png' }];
      storeMock.selectSnapshot.mockReturnValue(mockResponse);

      friendsPage.displayFriends();

      expect(storeMock.dispatch).toHaveBeenCalledWith(new GetFriendsAction());
      expect(friendsPage.friends).toEqual(mockResponse);
    });
  });

  describe('searchSchedule', () => {
    it('should set showSuggestions to false and update friends', () => {
      friendsPage.searchTerms.filteredSuggestions = [{ userId: 'test_id', name: 'Friend 1', profileURL: 'assets/Asset 2.png' }];

      friendsPage.searchSchedule();

      expect(friendsPage.searchTerms.showSuggestions).toBe(false);
      expect(friendsPage.friends).toEqual([{ userId: 'test_id', name: 'Friend 1', profileURL: 'assets/Asset 2.png' }]);
    });
  });

  describe('onSearchInput', () => {
    it('should update searchTerms and filter suggestions', () => {
      const mockEvent = { target: { value: 'friend' } };
      friendsPage.friends = [{ userId: 'test_id', name: 'Friend 1', profileURL: 'assets/Asset 2.png' }];

      friendsPage.onSearchInput(mockEvent);

      expect(friendsPage.searchTerms.showSuggestions).toBe(true);
      expect(friendsPage.searchTerms.filteredSuggestions).toEqual([{ userId: 'test_id', name: 'Friend 1', profileURL: 'assets/Asset 2.png' }]);
    });

    it('should set showSuggestions to false when searchText is empty', () => {
      const mockEvent = { target: { value: '' } };

      friendsPage.onSearchInput(mockEvent);

      expect(friendsPage.searchTerms.showSuggestions).toBe(false);
    });
  });
});

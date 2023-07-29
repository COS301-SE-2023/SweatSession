import { IProfileModel } from '../models';
import { Observable, of } from 'rxjs';
import {ProfileRepository} from "./profile.repository";

export class AngularFirestoreMock {
    private mockProfiles: { [userId: string]: IProfileModel } = {
        'testUserId': {
            userId: 'testUserId',
            name: 'Test User',
            email: 'test@example.com',
            bio: 'Test bio',
            profileURL: 'https://example.com',
            phoneNumber: '1234567890',
            height: '110',
            weight: '150',
        },
    };

    collection = jest.fn().mockReturnThis();
    doc = jest.fn().mockReturnThis();

    get = jest.fn().mockReturnValue({
        pipe: () => of(this.mockProfiles['testUserId']), // Return the mock profile directly, not inside a function
    });

    set = jest.fn().mockResolvedValue(undefined);
    update = jest.fn().mockResolvedValue(undefined); // Implement the 'update' method

}



describe('ProfileRepository Integration Test', () => {
    let profileRepo: ProfileRepository;
    const testProfile: IProfileModel = {
        userId: 'testUserId',
        name: 'Test User',
        email: 'test@example.com',
        bio: 'Test bio',
        profileURL: 'https://example.com',
        phoneNumber: '1234567890',
        height: '110',
        weight: '150',
    };

    beforeEach(() => {
        const angularFireMock = new AngularFirestoreMock();
        profileRepo = new ProfileRepository(angularFireMock as any); // Cast as 'any' to avoid TypeScript error
    });

    it('should add a new profile to the database', async () => {
        const result = await profileRepo.addProfile(testProfile).toPromise(); // Convert the Observable to a Promise using toPromise()
        expect(result).toEqual(testProfile);
    });

    it('should retrieve an existing profile from the database', async () => {
        const result = await profileRepo.getProfile({ userId: testProfile.userId }).toPromise(); // Convert the Observable to a Promise using toPromise()
        expect(result).toEqual(testProfile);
    });

    it('should throw an error when retrieving a non-existent profile', async () => {
        const nonExistentUserId = 'nonExistentUserId';
        try {
            await profileRepo.getProfile({ userId: nonExistentUserId }).toPromise();
            fail('Expected an error, but got none.');
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });

    it('should update an existing profile in the database', async () => {
        const updatedProfile: IProfileModel = {
            userId: 'testUserId',
            name: 'updated User',
            email: 'test@example.com',
            bio: 'Test bio',
            profileURL: 'https://example.com',
            phoneNumber: '1234567890',
            height: '110',
            weight: '150',
        };

        await profileRepo.updateProfile(updatedProfile);

        const result = await profileRepo.getProfile({ userId: updatedProfile.userId }).toPromise();
         expect(result).not.toEqual(updatedProfile);
    });
});

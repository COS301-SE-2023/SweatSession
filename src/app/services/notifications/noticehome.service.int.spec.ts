// Import the required modules and classes for testing
import { NoticehomeService } from './noticehome.service';
import { Subject } from 'rxjs';

describe('NoticehomeService', () => {
  let noticehomeService: NoticehomeService;

  beforeEach(() => {
    // Create a new instance of the NoticehomeService before each test
    noticehomeService = new NoticehomeService();
  });

  it('should be created', () => {
    // Test whether the service instance is created successfully
    expect(noticehomeService).toBeTruthy();
  });

  it('should have a send_data property of type Subject', () => {
    // Test whether the send_data property is an instance of Subject
    expect(noticehomeService.send_data instanceof Subject).toBe(true);
  });

  it('should emit data when send_data.next() is called', () => {
    // Define a sample data object
    const testData = { message: 'Test data' };

    // Create a mock subscriber to listen to changes on the send_data subject
    const mockSubscriber = jest.fn();
    noticehomeService.send_data.subscribe(mockSubscriber);

    // Call the send_data.next() method with the sample data
    noticehomeService.send_data.next(testData);

    // Expect the mockSubscriber to have been called with the testData
    expect(mockSubscriber).toHaveBeenCalledWith(testData);
  });
});


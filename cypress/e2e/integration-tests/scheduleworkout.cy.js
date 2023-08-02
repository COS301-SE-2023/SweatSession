describe('Add Schedule Component', () => {
    beforeEach(() => {
      cy.visit('https://sweatsession.web.app/SweatSession/addSchedule'); 
    });
  
    it('should fill out the form and add a schedule', () => {
      // Enter the schedule details
      cy.get('ion-input[placeholder="Click on the location icon."]').type('Tuks Gym');
      cy.get('ion-input[autofocus="false"]').type('Rowing session');
      cy.get('ion-input[type="number"]').type('30');
  
      // Select a date and time
      const currentDate = new Date();
      const futureDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
      cy.get('ion-input[type="date"]').invoke('val', `${futureDate.getFullYear()}-${(futureDate.getMonth() + 1).toString().padStart(2, '0')}-${futureDate.getDate().toString().padStart(2, '0')}`).trigger('input');
      cy.get('ion-input[type="time"]').type('12:00');
      cy.wait(4000);
      
  
      // Save the schedule
      cy.get('ion-button').contains('Save').click();
  
    });
  
    
  });
  
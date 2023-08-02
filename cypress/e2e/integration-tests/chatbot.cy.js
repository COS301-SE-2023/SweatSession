describe('ChatbotPage', () => {
    beforeEach(() => {
      cy.visit('https://sweatsession.web.app/SweatSession/home'); 
      cy.wait(4000);
      cy.get('ion-tab-button[tab="chatbot"]').click();
    });
  
    it('should display the chatbot input and send messages', () => {
      const message = 'Hello, how are you?';
      cy.get('ion-textarea[placeholder="Enter your Question"]').type(message).should('have.value', message);
      cy.wait(4000);
      cy.get('.message-send-fab-button').click();
      
    });
  
    it('should display health-related response for health-related questions', () => {
      const healthRelatedMessage = 'What are some good exercises for beginners?';
      cy.get('ion-textarea[placeholder="Enter your Question"]').type(healthRelatedMessage).should('have.value', healthRelatedMessage);
      cy.wait(4000);
      cy.get('.message-send-fab-button').click();
      cy.wait(20000);
      cy.get('.bot-message').should('have.length', 1);
     
      //cy.get('[data-cy="chatbot-messages"]').contains('SS-bot', 'Sorry, I can only answer health-related questions.').should('not.exist');
      //cy.get('[data-cy="chatbot-messages"]').contains('SS-bot');
    });
  

  });
  
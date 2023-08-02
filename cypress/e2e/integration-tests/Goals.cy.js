describe('Authentication Page Testing', () => {
    // beforeEach(() => {
    //     cy.visit('http://localhost:4200/SweatSession/login');
    // });


    it('Go into the Goals Tab', () => {

        cy.visit('http://localhost:4200/SweatSession/view-personalbests')
        cy.get('ion-icon[name="chevron-forward" id="goalsIcon"]').click();
        // cy.contains('Goals').click();

    });

    cy.contains('ion-title', 'Personal Bests')
    cy.get('ion-fab-button').should('be.visible').and('have.text', 'Add')
    cy.get('ion-fab-button').click()
    cy.get('form').should('be.visible')
    cy.get('ion-button[type="submit"]').click() 
    cy.contains('ion-label', 'Exercise is required')

});
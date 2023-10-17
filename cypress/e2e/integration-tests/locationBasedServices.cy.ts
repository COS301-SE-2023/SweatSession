describe('locationBasedServices integration Testing', () => {
    beforeEach(() => {
        // //login

        // cy.visit('http://localhost:4200/SweatSession/login');
        // // cy.visit('https://sweatsession.web.app/SweatSession/login');
        // cy.wait(2000);
        // cy.get('ion-input[formControlName="email"]').should('exist') 
        // cy.get('ion-input[formControlName="email"]').type('testuser@gmail.com');
        // cy.get('ion-input[formControlName="password"]').type('test123');
        // cy.get('ion-button[type="submit"]').click();
        // cy.wait(2000);
    });

    afterEach(() => {
        // //logout
        
        // cy.visit('http://localhost:4200/SweatSession/home/dashboard');
        // // cy.visit('https://sweatsession.web.app/SweatSession/login');
        // cy.wait(2000);
        // cy.get('ion-buttons[slot="start"]').click()
        // cy.contains('ion-item', 'Logout').click()
    })

    it('should show, check and close the select gym location modal', () => {
        cy.visit('http://localhost:4200/SweatSession/addSchedule')
        // cy.visit('https://sweatsession.web.appSweatSession/addSchedule')
        cy.wait(5000);
        cy.get('ion-icon[name="location-outline"]').click();
        cy.wait(10000);

        //checks
        cy.get('ion-title').should('have.css', 'font-family', 'Montserrat, sans-serif')
        cy.contains('ion-title', 'Select Location')
        cy.get('ion-button').contains('Close').should('be.visible').click()
    });
});

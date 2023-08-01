describe('Authentication Page Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/SweatSession/login');
    });

    it('should display the sign-in form', () => {
        // Wait for the element to become visible before interacting with it.
        // cy.get('app-login.ion-page').should('be.visible');
        // cy.get('ion-input[formControlName="email"]').should('be.visible');
        // cy.get('ion-input[formControlName="password"]').should('be.visible');
        // cy.get('ion-button[type="submit"]').should('be.visible');
        //wait for the element to become visible before interacting with it

        // wait 2 secs
        cy.wait(2000);
        //fill in the form
        cy.get('ion-input[formControlName="email"]').type('samuraifari@gmail.com');
        cy.get('ion-input[formControlName="password"]').type('@T123456');
        cy.get('ion-button[type="submit"]').click();
        cy.url().should('include', '/dashboard');

    });
});

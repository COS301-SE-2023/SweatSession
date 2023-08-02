describe('', () => {
    beforeEach(() => {
        // cy.visit('http://localhost:4200/SweatSession/login');
        cy.visit('https://sweatsession.web.app/SweatSession/login');
        cy.wait(2000);
        cy.get('ion-input[formControlName="email"]').type('testuser@gmail.com');
        cy.get('ion-input[formControlName="password"]').type('test123');
        cy.get('ion-button[type="submit"]').click();
    });

    it('should display the sign-in form', () => {
        
    });
});

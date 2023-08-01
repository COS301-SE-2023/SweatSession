describe('test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })
    it('loads TODO items', () => {
        cy.get('.todo-list li').should('have.length', 2)
      })
    
      it('adds a new TODO item', () => {
        const newItem = 'Feed the cat'
    
        cy.get('.new-todo').type(newItem + '{enter}') 
    
        cy.get('.todo-list li').last().should('have.text', newItem) 
      })
    
      it('marks a TODO as completed', () => {
        cy.contains('Pay electric bill')
          .parent()
          .find('.toggle')
          .click()
    
        cy.contains('Pay electric bill')
          .parents('li')
          .should('have.class', 'completed') 
      })
})
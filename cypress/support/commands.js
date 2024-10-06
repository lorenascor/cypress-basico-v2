Cypress.Commands.add('illMandatoryFieldsAndSubmit' ,function() {
    cy.get('#firstName').type('Lorena')
    cy.get('#lastName').type('S Correia')
    cy.get('#email').type('lorena@example.com')
    cy.get('#open-text-area').type('Teste Aprendendo')
    cy.contains('button', 'Enviar').click()
})
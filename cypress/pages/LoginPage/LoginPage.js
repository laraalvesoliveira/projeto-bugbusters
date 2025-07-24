Cypress.Commands.add('goToLoginPage', () => {
    cy.visit('https://automationpratice.com.br/')
    cy.get('a[href="/login"]').first().click()
})

Cypress.Commands.add('checkUserAndPasswordFields', () => {
    cy.get('#user').should('be.visible').should('be.enabled')
    cy.get('#password').should('be.visible').should('be.enabled')
});

Cypress.Commands.add('login', (user,password) => {
    cy.get('#user').type(user)
    cy.get('#password').type(password)
    cy.get('#btnLogin').click()

})




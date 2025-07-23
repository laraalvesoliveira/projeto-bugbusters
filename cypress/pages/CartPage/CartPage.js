Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://automationpratice.com.br/');
  cy.contains('a', 'Login').click()
  cy.get('#user').type(email);
  cy.get('#password').type(password);
  cy.get('#btnLogin').click();
  cy.get('.swal2-confirm').click()
});

Cypress.Commands.add('goToShop', () => {
    cy.get('a.offcanvas-toggle.offside-menu').click()
    cy.get('#menuShopText').click()
    cy.get('a[href="/shoplist"]').first().click({ force: true })
});

Cypress.Commands.add('addToCart', () => {
    cy.get('.add-to-cart').first().click()
    cy.get('.offcanvas-toggle').eq(1).click({ force: true })
    cy.contains('a.offcanvas-wishlist-item-link', 'T-Shirt For Men')
    .should('exist')
    .should('be.visible', { timeout: 6000 })
});




Cypress.Commands.add('goToHomePage', () => {
cy.visit('https://automationpratice.com.br/');
});

Cypress.Commands.add('goToRegisterPage', () => {
cy.get('a[href="/register"]').click();
});

Cypress.Commands.add('typeFullName', (fullName) => {
cy.get('#user').type(fullName);
});

Cypress.Commands.add('typeEmail', (email) => {
cy.get('#email').type(email);
});

Cypress.Commands.add('typePassword', (password) => {
cy.get('#password').type(password);
})

Cypress.Commands.add('submitBtnRegister', () => {
cy.get('#btnRegister').click();
})
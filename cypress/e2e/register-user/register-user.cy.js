import { faker } from '@faker-js/faker'
import '../../pages/RegisterPage/RegisterPage.js'

describe('Validar registro de usuários', () => {
    it('Validar se o botão cadastro está visível e clicável na tela', () => {
        cy.goToHomePage()
        .contains('a', ' Cadastro')
        .should('be.visible')
        .should('have.attr', 'href', '/register')
    });


    it('Validar redirecionamento ao clicar no botão cadastro', () => {
        cy.goToHomePage()
        cy.goToRegisterPage()
        cy.url().should('include', '/register')
        cy.contains('h3', 'Cadastro de usuário')
    });

    it('Validar campos nome, email e senha visíveis na tela de cadastro para o usuário preencher', () => {
        cy.goToHomePage()
        cy.goToRegisterPage()
        cy.contains('label', 'Nome')
        cy.typeFullName(faker.person.fullName()).should('be.visible')
        cy.contains('label', 'E-mail')
        cy.typeEmail(faker.internet.email()).should('be.visible')
        cy.contains('label', 'Senha')
        cy.typePassword(123456).should('be.visible')
    });

    it('Validar cadastro com sucesso após preenchimento dos campos', () => {
        cy.goToHomePage()
        cy.goToRegisterPage()
        cy.typeFullName(faker.person.fullName())
        cy.typeEmail(faker.internet.email())
        cy.typePassword(123456)
        cy.submitBtnRegister()
        cy.url().should('include', '/my-account')
        cy.get('#swal2-title').contains('Cadastro realizado!').should('be.visible')

    });

    it('Validar mensagem de obrigatoriedade ao deixar o campo nome vazio', () => {
        cy.goToHomePage()
        cy.goToRegisterPage()
        cy.typeEmail(faker.internet.email())
        cy.typePassword(123456)
        cy.submitBtnRegister()
        cy.contains('O campo nome deve ser prenchido').should('be.visible')

    });

    it('Validar mensagem de obrigatoriedade ao deixar o campo e-mail vazio', () => {
        cy.goToHomePage()
        cy.goToRegisterPage()
        cy.typeFullName(faker.person.fullName())
        cy.typePassword(123456)
        cy.submitBtnRegister()
        cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')

    });

    
    it('Validar mensagem de obrigatoriedade ao deixar o campo senha vazio', () => {
        cy.goToHomePage()
        cy.goToRegisterPage()
        cy.typeFullName(faker.person.fullName())
        cy.typeEmail(faker.internet.email())
        cy.submitBtnRegister()
        cy.contains('O campo senha deve ter pelo menos 6 dígitos').should('be.visible')

    });
})
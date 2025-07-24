describe('Validar Login de Usuários', () => {

    it('Validar redirecionamento de página ao clicar no botão login', () => {
        cy.goToLoginPage ()
    })

    it('Validar que os campos email e senha estão visíveis na tela de login', () => {
        cy.goToLoginPage ()
        cy.checkUserAndPasswordFields ()
    })

    it('Validar que o usuário consegue realizar o login com credenciais válidas', () => {
        cy.goToLoginPage ()
        cy.login('teste@teste.com', 'teste@teste1010')
        cy.url().should('eq', 'https://automationpratice.com.br/my-account')
        cy.get('#swal2-title').contains('Login realizado')
    })

    it('Validar que o usuário não consegue realizar o login com email não registrado', () => {
        cy.goToLoginPage ()
        cy.login('teste@teste.com.br', 'teste@teste1010')
        cy.get('#swal2-title').contains('Login não realizado, tente novamente ou registre-se')
    })

    it('Validar que o usuário não consegue realizar o login com senha incorreta', () => {
        cy.goToLoginPage ()
        cy.login('teste@teste.com', 'teste@teste10100')
        cy.get('#swal2-title').contains('Senha incorreta, tente novamente')

    })
})

import '../../pages/CartPage/CartPage.js'

describe('Validar carrinho de compras', () => {
    it('Validar adição de produto ao carrinho', () => {
        cy.login('testes@testes.com', '123456')
        cy.goToShop()
        cy.addToCart()
    });


    it('Validar remoção de produto ao carrinho', () => {
        cy.login('testes@testes.com', '123456')
        cy.goToShop()
        cy.addToCart()
        cy.get('li.offcanvas-wishlist-item-single')
        .filter(':contains("T-Shirt For Men")')
        .find('.offcanvas-wishlist-item-delete')
        .eq(0)
        .click()
        cy.get('li.offcanvas-wishlist-item-single')
        .filter(':contains("T-Shirt For Men")')
        .should('not.exist')
    });

})
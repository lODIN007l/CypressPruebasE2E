
const usuariovalido={
  email:"test11@gmail.com",
  pasword:"Prueba2023_"
}


describe('Pruebas Carrito', () => {
  it('Producto Eliminado del carrito', () => {
    cy.visit('http://localhost:3000/product/J86mwkdvc425kSGVylrI')
    cy.get('.css-1qfu80a-ValueContainer2').click();
    cy.get('.css-1qfu80a-ValueContainer2').type('56 mm').click();
    cy.get('.color-item').click();
    cy.get('.product-modal-action > .button').click();
    cy.get('.product-modal-action > .button').click();
    cy.get('.navigation-menu-item > .button-link').click();
    cy.get('.basket-list').should('include.text', 'Tu carrito esta vacio');
  })
  it('Producto Agregado al carrito', () => {
    cy.visit('http://localhost:3000/product/J86mwkdvc425kSGVylrI')
    cy.get('.css-1qfu80a-ValueContainer2').click();
    cy.get('.css-1qfu80a-ValueContainer2').type('56 mm').click();
    cy.get('.color-item').click();
    cy.get('.product-modal-action > .button').click();
    cy.get('.navigation-menu-item > .button-link').click();
    cy.get('.basket-list').should('include.text', 'Gafas Gues');
  })
  
})
describe('Proceso de compra', () => {
  it('Proceso de Compra Sin usuario logueado ', () => {
    cy.visit('http://localhost:3000/product/J86mwkdvc425kSGVylrI')
    cy.get('.css-1qfu80a-ValueContainer2').click();
    cy.get('.css-1qfu80a-ValueContainer2').type('56 mm').click();
    cy.get('.color-item').click();
    cy.get('.product-modal-action > .button').click();
    cy.get('.navigation-menu-item > .button-link').click();
    cy.get('.basket-list').should('include.text', 'Gafas Gues');
    cy.get('.basket-checkout-button').click();
    cy.get('.d-flex-center > :nth-child(2)').click();
    // cy.visit('http://localhost:3000/signin');
    cy.get('#email').type(usuariovalido.email);
    cy.get('#password').type(usuariovalido.pasword);
    cy.get('.auth-action > .button').click();
    cy.get('.content').should('include.text', 'Detalles de ');

  })
  it('Proceso de Compra-Paso 2 y 3  ', () => {
    cy.visit('http://localhost:3000/checkout/step1')
    cy.get('.siguiente').click();
    cy.get('.content').should('include.text', 'envio');
    cy.get('#address').type('Calle ESPOCH');
    cy.get('.form-control').clear();
    cy.get('.form-control').type('+593984612108');
    cy.get('.checkout-checkbox-field').click();
    cy.get('.button-icon');
    cy.get('.button-icon').click();
    cy.get('.checkout-shipping-action > :nth-child(2)').click();
    cy.get('.toast').should('include.text', 'Modo de prueba');
  })
  
  
})

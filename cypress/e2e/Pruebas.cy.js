const usuariovalido={
  email:"test11@gmail.com",
  pasword:"Prueba2023_"
}

describe('Login Prouebas', () => {
  it('Logueo Email Invalido', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get('#email').type("pepe1");
    cy.get('#password').type(" ");
    cy.get('.auth-main').click();
    cy.get(':nth-child(1) > .input-group > .label-input').should('include.text', 'Email no valido.');
    cy.clearAllCookies();
  })
  
  it('Logueo Correcto', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get('#email').type(usuariovalido.email);
    cy.get('#password').type(usuariovalido.pasword);
    cy.get('.auth-action > .button').click();
    cy.get('.text-thin').should('include.text', 'Claridad');
    cy.clearAllCookies();
  })
});
const usuariovalido={
  email:"test11@gmail.com",
  pasword:"Prueba2023_"
}
describe('Register Pruebas', () => {
  it('Registro de  Email ya usado Invalido', () => {
    cy.visit('http://localhost:3000/signup');
    
    cy.get('#fullname').type("Usuariodeprueba");
    cy.get('#email').type(usuariovalido.email);
    cy.get('#password').type("Prueba2023_");
    cy.get('.auth-action > .button').click();
    cy.get('.text-center').should('include.text', 'Email ya registrado');
  })
  it('Registro con password sin cumplir las validaciones', () => {
    cy.visit('http://localhost:3000/signup');
    
    cy.get('#fullname').type("Usuariodeprueba");
    cy.get('#email').type("test14@gmail.com");
    cy.get('#password').type("prueba2023_");
    cy.get('.auth-action > .button').click();
    cy.get(':nth-child(3) > .input-group > .label-input').should('include.text', 'almenos una letra mayuscula');
    cy.get('#password').clear();
    cy.get('#password').type("P");
    cy.get('.auth-action > .button').click();
    cy.get(':nth-child(3) > .input-group > .label-input').should('include.text', 'menor que 8 caracteres');
  })
  
  it('Registro Correcto', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('#fullname').type("16Usuariodeprueba");
    cy.get('#email').type("test16@gmail.com");
    cy.get('#password').type("Prueba2023_");
    cy.get('.auth-action > .button').click();
    cy.get('.text-overflow-ellipsis').should('include.text', '16Usuario');
  })
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginStandardUser', () => {
    const input = {
        standard_user: 'standard_user',
        password: 'secret_sauce'
    };

    cy.visit('/');
    cy.get('#user-name').type(input.standard_user);
    cy.get('#password').type(input.password);
    cy.get('#login-button').click();
});

Cypress.Commands.add('typeUsername', (text) => {
    cy.get('#user-name').type(text);
  });
  
  Cypress.Commands.add('typePassword', (text) => {
    cy.get('#password').type(text);
  });
  
  Cypress.Commands.add('clickSubmitLoginBtn', () => {
    cy.get('#login-button').click();
  });
  
  Cypress.Commands.add('clickSubmitAddCartBtn', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });

Cypress.Commands.add('validateProdcutImages', () => {
    cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-bike-light-img"]')
      .should('have.attr', 'src').and('include', '/static/media/bike-light-1200x1500.37c843b0.jpg');
    cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]')
      .should('have.attr', 'src').and('include', '/static/media/bolt-shirt-1200x1500.c2599ac5.jpg');
    cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-onesie-img"]')
      .should('have.attr', 'src').and('include', '/static/media/red-onesie-1200x1500.2ec615b2.jpg');
    cy.get('img.inventory_item_img[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]')
      .should('have.attr', 'src').and('include', '/static/media/red-tatt-1200x1500.30dadef4.jpg');
    cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-backpack-img"]')
      .should('have.attr', 'src').and('include', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
    cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-fleece-jacket-img"]')
      .should('have.attr', 'src').and('include', '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg');
  });


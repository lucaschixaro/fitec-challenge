/// <reference types="cypress" />
import RegisterForm from '../../support/register-form';

const registerForm = new RegisterForm();

describe('Feature: Tela de Login', () => {

    describe('Efetuar login com dados válidos', () => {

        it('Dado que o usuário efetua login com dados válidos', () => {
            cy.loginStandardUser();
        })

        it('Então deve ser possível visualizar o inventário de produtos e suas respectivas fotos', () => {
            registerForm.elements.appLogo().should('be.visible')
            registerForm.elements.secondaryHeader().should('be.visible')
            registerForm.elements.appLogo().should('contains.text', 'Swag Labs')
            registerForm.elements.secondaryHeader().should('contains.text', 'Products')
            cy.validateProdcutImages();
        })
    })
})
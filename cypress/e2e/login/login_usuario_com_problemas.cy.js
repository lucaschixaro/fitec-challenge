/// <reference types="cypress" />
import RegisterForm from '../../support/register-form';

const registerForm = new RegisterForm();

// Usuário apresenta inconsistências nas fotos dos produtos
const input = {
    standard_user: 'standard_user',
    problem_user: 'problem_user',

    password: 'secret_sauce'
}
describe('Feature: Tela de Login', () => {
    describe('Tentativa de login com usuário com problemas', () => {


        it('Dado que estou na tela de login ', () => {
            cy.visit('/')
        })

        it(`Quando insiro o "${input.problem_user}" no campo username`, () => {
            cy.typeUsername(input.problem_user);
        })

        it(`E insiro o "${input.password}" no campo password`, () => {
            cy.typePassword(input.password)
        })

        it('E clico no botão de login', () => {
            cy.clickSubmitLoginBtn();
        })

        it('Então deve ser possível visualizar os produtos no inventário e as fotos dos produtos incorretas', () => {
            registerForm.elements.appLogo().should('be.visible')
            registerForm.elements.secondaryHeader().should('be.visible')
            registerForm.elements.appLogo().should('contains.text', 'Swag Labs')
            registerForm.elements.secondaryHeader().should('contains.text', 'Products')
            registerForm.elements.product0Image().should('have.attr', 'src').and('include', '/static/media/sl-404.168b1cce.jpg')
            registerForm.elements.product1Image().should('have.attr', 'src').and('include', '/static/media/sl-404.168b1cce.jpg')
            registerForm.elements.product2Image().should('have.attr', 'src').and('include', '/static/media/sl-404.168b1cce.jpg')
            registerForm.elements.product3Image().should('have.attr', 'src').and('include', '/static/media/sl-404.168b1cce.jpg')
            registerForm.elements.product4Image().should('have.attr', 'src').and('include', '/static/media/sl-404.168b1cce.jpg')
            registerForm.elements.product5Image().should('have.attr', 'src').and('include', '/static/media/sl-404.168b1cce.jpg')

        })
    })
})
/// <reference types="cypress" />
import RegisterForm from '../../support/register-form';

const registerForm = new RegisterForm();

const input = {
    locked_out_user: 'locked_out_user',
    password: 'secret_sauce'
}
describe('Feature: Tela de Login', () => {
    describe('Tentativa de login com usuário bloqueado', () => {


        it('Dado que estou na tela de login ', () => {
            cy.visit('/')
        })

        it(`Quando insiro o "${input.locked_out_user}" no campo username`, () => {
            cy.typeUsername(input.locked_out_user)
        })

        it(`E insiro o "${input.password}" no campo password`, () => {
            cy.typePassword(input.password)
        })

        it('E clico no botão de login', () => {
            cy.clickSubmitLoginBtn()
        })

        it('Então deve ser aparecer uma mensagem de aviso com o texto "Epic sadface: Sorry, this user has been locked out." alertando que o usuário foi bloqueado', () => {
            registerForm.elements.lockedUserFeedback().should('be.visible', 'have.text', 'Epic sadface: Sorry, this user has been locked out.')
        })
    })
})
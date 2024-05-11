/// <reference types="cypress" />
import RegisterForm from '../../support/register-form'; // Importa a classe RegisterForm

const registerForm = new RegisterForm();

describe('Fluxo e telas de Checkout', () => {

    describe('Adicionar um produto no carrinho e efetuar o fluxo de checkout com informações inválidas', () => {

        it('Dado que o usuário está logado', () => {
            cy.loginStandardUser();
        })

        it('Quando o usuário adiciona um produto ao carrinho', () => {
            cy.clickSubmitAddCartBtn()
        })
        it('Então o ícone de notificação da quantidade de itens adicionados ao carrinho deve ficar visível', () => {
            // Valida se o ícone de notificação está visível após adicionar item ao carrinho
            cy.get('[data-test="shopping-cart-badge"]').should('be.visible').should('have.text', '1')
        })

        it('E o usuário acessa o carrinho', () => {
            cy.get('[data-test="shopping-cart-link"]').click()
        })

        it('Então é redirecionado para a tela do carrinho onde deve ser possível visualizar os botões de "Checkout", "Remove" e "Continue Shopping" assim como os produtos adicionados ao carrinho e a quantidade', () => {
            // Valida se o botão de "Checkout" está visível
            cy.get('[data-test="checkout"]').should('be.visible')

            // Valida se o botão de "Continue Shopping" está visível
            cy.get('[data-test="continue-shopping"]').should('be.visible')

            // Valida se o botão de "Remove" está visível
            cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')

            // Valida a componente de quantidade possui o texto "QTY"
            cy.get('[data-test="cart-quantity-label"]').should('have.text', 'QTY')

            // Valida se o produto correto foi adicionado ao carrinho
            cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
        })
        it('E ao clicar no botão "Checkout" deve redirecionar para tela de "Your Information"', () => {
            cy.get('[data-test="checkout"]').click()

            // Valida texto do header da tela de "Your Information"
            cy.get('[data-test="title"]').should('have.text', 'Checkout: Your Information')
        })
        it('Então o usuário procede com os campos "First Name", "Last Name" e "Zip/Postal Code" em branco', () => {
            cy.get('[data-test="continue"]').click()
        })
        it('Então deve mostrar alerta de campo obrigatório', () => {
            cy.get('[data-test="error"]').should('be.visible')
            cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
        })

        // Remove o item do carrinho pra evitar um erro conhecido da aplicação
        it('Login novamente', () => {
            cy.loginStandardUser();
        })

        it('Remove o item do carrinho pra evitar um erro conhecido da aplicação', () => {
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        })
    })
})
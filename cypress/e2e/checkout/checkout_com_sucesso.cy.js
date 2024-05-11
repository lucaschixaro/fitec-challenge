/// <reference types="cypress" />
import RegisterForm from '../../support/register-form'; // Importa a classe RegisterForm

const registerForm = new RegisterForm();


describe('Fluxo e telas de Checkout', () => {

    describe('Adicionar um produto no carrinho e efetuar o fluxo de checkout com informações válidas', () => {

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
        it('Então o usuário preenche com dados válidos os campos "First Name", "Last Name" e "Zip/Postal Code"', () => {
            cy.get('[data-test="firstName"]').type('John');
            cy.get('[data-test="lastName"]').type('Doe');
            cy.get('[data-test="postalCode"]').type('12345');
        })
        it('E procede com a compra clicando no botão de "Continue"', () => {
            cy.get('[data-test="continue"]').click()
        })
        it('Então o usuário é redirecionado para a tela de "Overview" podendo visualizar informações como "Payment Information", "Shipping Information" e "Price Total"', () => {

            // Valida texto do header da tela de "Overview"
            cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
            // Valida informações "Payment Information", "Shipping Information" e "Price Total"
            cy.get('[data-test="payment-info-label"]').should('have.text', 'Payment Information:')
            cy.get('[data-test="payment-info-value"]').should('have.text', 'SauceCard #31337')
            cy.get('[data-test="shipping-info-label"]').should('have.text', 'Shipping Information:')
            cy.get('[data-test="shipping-info-value"]').should('have.text', 'Free Pony Express Delivery!')
            cy.get('[data-test="total-info-label"]').should('have.text', 'Price Total')
            cy.get('[data-test="subtotal-label"]').should('have.text', 'Item total: $29.99')
            cy.get('[data-test="tax-label"]').should('have.text', 'Tax: $2.40')
            cy.get('[data-test="total-label"]').should('have.text', 'Total: $32.39')
        })
        it('E finaliza a compra clicando no botão de "Finish"', () => {
            cy.get('[data-test="finish"]').click()
        })
        it('Então deve finalizar a compra e mostrar a tela de "Checkout:Complete!" com o texto "Thank you for your order!" no header e o texto "Your order has been dispatched, and will arrive just as fast as the pony can get there!" e botão "Back Home"', () => {

            // Valida header e textos da compra concluída "Checkout:Complete!"
            cy.get('[data-test="complete-header"]').should('be.visible')
            cy.get('[data-test="complete-text"]').should('be.visible')
            cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
            cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
            cy.get('[data-test="back-to-products"]').should('be.visible')
        })
    })
})
class RegisterForm {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        lockedUserFeedback: () => cy.get('[data-test="error"]'),
        submitLoginBtn: () => cy.get('#login-button'),
        appLogo: () => cy.get('.app_logo'),
        secondaryHeader: () => cy.get('[data-test="secondary-header"]'),
        product0Image: () => cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-bike-light-img"]'),
        product1Image: () => cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]'),
        product2Image: () => cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-onesie-img"]'),
        product3Image: () => cy.get('img.inventory_item_img[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]'),
        product4Image: () => cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-backpack-img"]'),
        product5Image: () => cy.get('img.inventory_item_img[data-test="inventory-item-sauce-labs-fleece-jacket-img"]')
    }
}

export default RegisterForm;
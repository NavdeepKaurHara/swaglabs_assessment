// The checkoutPage class contains methods to fill the checkout form, complete the checkout process, verify the order completion message and verify erorr message.
class checkoutPage {
    fillCheckoutForm(firstName, lastName, postalCode) {
        if(firstName === ''){
            cy.get('[data-test="lastName"]').type(lastName);
            cy.get('[data-test="postalCode"]').type(postalCode);
            cy.get('[data-test="continue"]').click();
        }
        else if(lastName === ''){
            cy.get('[data-test="firstName"]').type(firstName);
            cy.get('[data-test="postalCode"]').type(postalCode);
            cy.get('[data-test="continue"]').click();
        }
        else if(postalCode === ''){
            cy.get('[data-test="firstName"]').type(firstName);
            cy.get('[data-test="lastName"]').type(lastName);
            cy.get('[data-test="continue"]').click();
        } 
        else {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        }
    }

    completeCheckout() {
        cy.get('[data-test="finish"]').click();
    }

    verifyOrderCompletion() {
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    }
    verifyErrorMessage(error) {
        cy.get('.error-message-container.error').should('be.visible').and('contain.text', error);
    }
}

export default checkoutPage;
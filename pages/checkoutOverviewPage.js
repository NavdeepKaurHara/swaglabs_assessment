class CheckoutOverviewPage {
    verifyPageUrl() {
        cy.url().should('include', '/checkout-step-two');
    }

    verifyItemDetails(itemName, itemPrice) {
        cy.get('.cart_item').should('contain', itemName);
        cy.get('.inventory_item_price').should('contain', itemPrice);
    }

    verifyPaymentAndShippingInfo() {
        cy.get('.summary_info').should('contain', 'Payment Information');
        cy.get('.summary_info').should('contain', 'Shipping Information');
    }

    finishCheckout() {
        cy.get('[data-test="finish"]').click();
    }
}

export default CheckoutOverviewPage;

// This file contains the cartPage class which contains methods to verify the items in the cart , remove items and proceed to checkout
class cartPage {
    verifyItemsInCart(expectedCount) {
      cy.get('.cart_item').its('length').should('eq', expectedCount);
    }
    removeItem(index) {
      cy.get('.cart_item').eq(index).find('.cart_button').click();
  }

    proceedToCheckout() {
        cy.get('[data-test="checkout"]').click();
    }
}

export default cartPage;

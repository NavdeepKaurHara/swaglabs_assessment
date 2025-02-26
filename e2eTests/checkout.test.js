import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';
const loginData = require('../fixtures/loginData.json');
const checkoutData = require('../fixtures/checkoutData.json');
import { loginAs, logout, addRandomItemsToCart } from '../support/utils';

describe('Swag Labs checkout Tests', () => {
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    beforeEach(() => {
        // Visit the login page and login
        cy.visit('/');
        loginAs(loginData.validUser.username, loginData.validUser.password);
    });

    it('Verify the checkout process', () => {

        addRandomItemsToCart(2);
        inventoryPage.openCart();
        cartPage.verifyItemsInCart(2);
        cartPage.proceedToCheckout();
        checkoutPage.fillCheckoutForm(checkoutData.customer.firstName, checkoutData.customer.lastName, checkoutData.customer.postalCode);
        checkoutPage.completeCheckout();
        checkoutPage.verifyOrderCompletion();

    });

    it.skip('Verify checkout process using invalid Firstname', () => {

        addRandomItemsToCart(2);
        inventoryPage.openCart();
        cartPage.verifyItemsInCart(2);
        cartPage.proceedToCheckout();
        checkoutPage.fillCheckoutForm(checkoutData.customer.invalidFirstName, checkoutData.customer.lastName, checkoutData.customer.postalCode);
        checkoutPage.verifyErrorMessage();


    });
    it('Verify checkout process without entering Firstname', () => {

        addRandomItemsToCart(2);
        inventoryPage.openCart();
        cartPage.verifyItemsInCart(2);
        cartPage.proceedToCheckout();
        checkoutPage.fillCheckoutForm(checkoutData.customer.noValue, checkoutData.customer.lastName, checkoutData.customer.postalCode);
        checkoutPage.verifyErrorMessage('Error: First Name is required');


    });
    it('Verify checkout process without entering Lastname', () => {

        addRandomItemsToCart(2);
        inventoryPage.openCart();
        cartPage.verifyItemsInCart(2);
        cartPage.proceedToCheckout();
        checkoutPage.fillCheckoutForm(checkoutData.customer.firstName, checkoutData.customer.noValue, checkoutData.customer.postalCode);
        checkoutPage.verifyErrorMessage('Error: Last Name is required');


    });
    it('Verify checkout process without entering zip code', () => {

        addRandomItemsToCart(2);
        inventoryPage.openCart();
        cartPage.verifyItemsInCart(2);
        cartPage.proceedToCheckout();
        checkoutPage.fillCheckoutForm(checkoutData.customer.firstName, checkoutData.customer.lastName, checkoutData.customer.noValue);
        checkoutPage.verifyErrorMessage('Error: Postal Code is required');


    });

    it.skip('Verify checkout process with no items in the Bag', () => {
            
            inventoryPage.openCart();
            cartPage.proceedToCheckout();
            checkoutPage.fillCheckoutForm(checkoutData.customer.firstName, checkoutData.customer.lastName, checkoutData.customer.postalCode);
            checkoutPage.completeCheckout();
            checkoutPage.verifyOrderCompletion();
    
    
        });


    afterEach(() => {
        // Log out from the application
            logout();
            cy.clearCookies();
    });

});

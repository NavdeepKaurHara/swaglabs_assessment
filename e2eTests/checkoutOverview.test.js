import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';
import CheckoutOverviewPage from '../pages/checkoutOverviewPage';
const loginData = require('../fixtures/loginData.json');
const checkoutData = require('../fixtures/checkoutData.json');
import { loginAs, logout } from '../support/utils';

describe('Swag Labs checkout overview Tests', () => {
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const checkoutOverviewPage = new CheckoutOverviewPage();
    beforeEach(() => {
        // Visit the login page and login
        cy.visit('/');
        loginAs(loginData.validUser.username, loginData.validUser.password);
    });

    it('Verify the checkout Overview', () => {

        inventoryPage.addBagToCart();
        inventoryPage.openCart();
        cartPage.proceedToCheckout();
        checkoutPage.fillCheckoutForm(checkoutData.customer.firstName, checkoutData.customer.lastName, checkoutData.customer.postalCode);
        checkoutOverviewPage.verifyPageUrl();
        checkoutOverviewPage.verifyItemDetails('Sauce Labs Backpack', '$29.99');   
        checkoutOverviewPage.verifyPaymentAndShippingInfo();

    });

    
    afterEach(() => {
        // Log out from the application
            logout();
            cy.clearCookies();
    });

});
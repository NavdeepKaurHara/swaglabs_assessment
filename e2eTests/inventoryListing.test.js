import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';
const loginData = require('../fixtures/loginData.json');
import { loginAs, logout, addRandomItemsToCart } from '../support/utils';

describe('Swag Labs Inventory page Test', () => {
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    beforeEach(() => {
        // Visit the login page
        cy.visit('/');
        loginAs(loginData.validUser.username, loginData.validUser.password);
    });

    it('Verify all items are showing up', () => {

        inventoryPage.countItems().should('eq', 6);
    });

    it('Verify sorting of the inventory page', () => {
        inventoryPage.sortItems('Name (Z to A)');
        inventoryPage.verifySort('Name (Z to A)');
    });

    it('Add two random items to the cart', () => {
        addRandomItemsToCart(2);
        inventoryPage.openCart();
        cartPage.verifyItemsInCart(2);
    });

    it('Verify removing an item from the cart', () => {
        addRandomItemsToCart(2);
        inventoryPage.openCart();
        cartPage.verifyItemsInCart(2);
        cartPage.removeItem(1);
        cartPage.verifyItemsInCart(1);
    });

    afterEach(() => {
       // Log out from the application
       logout();
       cy.clearCookies();
    });

});

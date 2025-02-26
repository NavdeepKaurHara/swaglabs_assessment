import LoginPage from '../pages/loginPage';
const loginData = require('../fixtures/loginData.json');
import { loginAs, logout } from '../support/utils';


describe('Swag Labs Login and Logout Test', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        // Visit the login page
        cy.visit('/');
        cy.get('input[data-test="username"]').should('be.visible');
    });


    it('Login with valid credentials', () => {

        loginAs(loginData.validUser.username, loginData.validUser.password);
        cy.url().should('include', '/inventory');

    });


    it('Login fails with invalid credentials', () => {

        loginAs(loginData.invalidUser.username, loginData.invalidUser.password);
        loginPage.verifyErrorMessage('Username and password do not match');

    });

    it('Login fails with locked-out user credentials', () => {

        loginAs(loginData.lockedUser.username, loginData.lockedUser.password);
        loginPage.verifyErrorMessage('Sorry, this user has been locked out.');

    });

    it('Login fails when password is missing', () => {

        loginAs(loginData.missingPassword.username, '');
        loginPage.verifyErrorMessage('Password is required');

    });

    it('Login fails when username is missing', () => {

        loginAs('', loginData.missingUsername.password);
        loginPage.verifyErrorMessage('Username is required');

    });
    it('Logout from the application', () => {

        // log in and log out
        loginAs(loginData.validUser.username, loginData.validUser.password);
        logout();
        loginPage.verifyLoginPage();

    });
});

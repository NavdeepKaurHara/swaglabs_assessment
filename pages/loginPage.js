// The loginPage class contains methods to log in with valid and invalid credentials and verify the error message
class loginPage {
    login(username, password) {
        cy.get('input[data-test="username"]').type(username);
        cy.get('input[data-test="password"]').type(password);
        cy.get('input[data-test="login-button"]').click();
    }
    loginWithoutUsername( password) {
        cy.get('input[data-test="password"]').type(password);
        cy.get('input[data-test="login-button"]').click();
    }
    loginWithoutPassword( username) {
        cy.get('input[data-test="username"]').type(username);
        cy.get('input[data-test="login-button"]').click();
    }
    verifyLoginPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }
    verifyErrorMessage(error) {
        cy.get('.login_wrapper').should('be.visible').and('contain.text', error);
    }   
    isLogoutButtonVisible() {
        return cy.get('.bm-burger-button').should('be.visible');
    }
}

export default loginPage;

// The logoutPage class contains the method to logout from the application
class logoutPage {
    logout() {
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();

    }
}

export default logoutPage;
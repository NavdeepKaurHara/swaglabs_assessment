// Description: This file contains utility functions that can be used across multiple test files.
import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';

const loginPage = new LoginPage();
const logoutPage = new LogoutPage();

export function loginAs(username, password) {
  // this function logs in the user with the provided username and password
  // if no username or password is provided, it will attempt to log in without them
  if (!username) {
    loginPage.loginWithoutUsername(password);
  }
  else if (!password) {
    loginPage.loginWithoutPassword(username);
  } else {
    loginPage.login(username, password);
  }
}

export function logout() {
  // this function logs out the user
  logoutPage.logout();
}


export function addRandomItemsToCart(count) {
  // this function adds a random number of items to the cart
  cy.get('.inventory_item').then((items) => {
    const randomIndexes = Cypress._.sampleSize([...Array(items.length).keys()], count);

    randomIndexes.forEach((index) => {
      cy.wrap(items[index]).find('button').click();
    });
  });
}

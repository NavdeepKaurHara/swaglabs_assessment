// The inventoryPage class contains methods to open the cart, count the items, sort the items, and verify the sort.
class inventoryPage {
   

    openCart() {
        cy.get('.shopping_cart_link').click();
    }
    countItems(){
        return cy.get('div[data-test="inventory-item"]').its('length');
    }
    sortItems(sortType) {
        cy.get('.product_sort_container').select(sortType);
    }
    verifySort(sortType) {
        cy.get('.inventory_item_name').then((items) => {
            const itemNames = [...items].map((item) => item.innerText);
            const sortedItemNames = [...itemNames].sort((a, b) => b.localeCompare(a));

            expect(itemNames).to.deep.equal(sortedItemNames);
        });
    }
    addBagToCart(){
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }
}

export default inventoryPage;
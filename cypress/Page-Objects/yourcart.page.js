export class YourcartPage{

    checkoutBtn = '#checkout'
    cartItem = '.cart_item'
    cartBadge = '.shopping_cart_badge'
    removeBtn = '[data-test="remove-sauce-labs-backpack"]'

    clickOnCheckoutBtn(){

        cy.get(this.checkoutBtn).click()
    }
    verifyCartItembynumber(number){
        cy.get(this.cartBadge).should('have.text',number)
        }
    verifyCartItem(productName){
        cy.get(this.cartItem).should('contain',productName)
    }
    removeItemFromCart(){
       cy.get(this.removeBtn).click()
    }
    verifyCartIsEmpty(){
        cy.get(this.cartItem).should('not.exist')
    }

}

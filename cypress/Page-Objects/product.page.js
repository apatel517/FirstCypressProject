export class ProductPage{

    titelText = '.title'
    addToCart = '#add-to-cart-sauce-labs-backpack'
    cartIcon = '.shopping_cart_link'
    sortPruductIcon = '.product_sort_container'
    productList = '.inventory_item_name'
    productImg = '.inventory_item_img'
    menuBtn = '#react-burger-menu-btn'


   getTitleText(){

    cy.get(this.titelText).should('have.text','Products')
   }
   
addToCartItem(){
 cy.get(this.addToCart).click()
     }
clickonCartIcon(){
   cy.get(this.cartIcon).click()
  }
  
  productList(){
        cy.get(this.productList);
    }
 sortProductByNameAtoZ(){
    cy.get(this.sortPruductIcon).select('az')
    }
   sortProductByNameZtoA(){
    cy.get(this.sortPruductIcon).select('za')
   }
   sortProductByPriceLowtoHigh(){
    cy.get(this.sortPruductIcon).select('lohi')
   }
   sortProductByPriceHightolow(){
    cy.get(this.sortPruductIcon).select('hilo')
   }  
   productListIsVisible(){
    cy.get(this.productList).should('be.visible')
   }
  verifyProductImg(){
   
    cy.get(this.productImg).first().screenshot('productimage')

  }
  clickonMenubtn(){

   cy.get(this.menuBtn).click()
  }
}
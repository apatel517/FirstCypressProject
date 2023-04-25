import{LoginPage} from "..//Page-Objects/login.page"
import{ProductPage} from "../Page-Objects/product.page"
import{YourcartPage} from "../Page-Objects/yourcart.page"
import{CheckoutInfoPage} from "../Page-Objects/checkoutinfo.page"
import{CheckOutOverView} from "../Page-Objects/checkoutoverview.page"
import{ConfirmationPage} from "../Page-Objects/confirmation.page"
import{MenuPage} from "..//Page-Objects/menu.page"
 
const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new YourcartPage()
const checkoutinfoPage = new CheckoutInfoPage()
const checkout = new CheckOutOverView()
const confirmationtext = new ConfirmationPage()
const menu = new MenuPage()

  describe('Test Cases',()=>{
    
    beforeEach(() => {
      loginPage.navigate();
      cy.fixture('users').then((users) => {
      const validUser = users.validUser;
      loginPage.enterUsernameandPassword(validUser.username, validUser.password)
      loginPage.clickLogin()
       })
       })
 it('user should succefully login', () => {
      productPage.getTitleText()
       })
 it('Product should be sort by name A to Z',()=>{
        productPage.sortProductByNameAtoZ()
       })
 it('Product should be sort by name Z to A',()=>{
        productPage.sortProductByNameZtoA()
      })
 it('Product should be sort by Price high to low',()=>{
        productPage.sortProductByPriceHightolow()
      })
 it('Product should be sort by Price low to high',()=>{
        productPage.sortProductByPriceLowtoHigh()
      })
 it('Product List Should be Visible',()=>{
        productPage.productListIsVisible()
      }) 
 it('Add Item To Cart and verify by number', () => {
        productPage.addToCartItem()
        productPage.clickonCartIcon()
        cartPage.verifyCartItembynumber('1')
      })
 it('Add item To Cart and Verify By item Name',()=>{
        productPage.addToCartItem()
        productPage.clickonCartIcon()
        cartPage.verifyCartItem('Sauce Labs Backpack')
     })
 it ('user should logout succefully',()=>{
      productPage.clickonMenubtn()
      menu.clickonlogOutBtn()
      loginPage.verifyloginBtnIsVisible()
   })
 it('remove item from cart and verify',()=>{
       productPage.addToCartItem()
       productPage.clickonCartIcon()
       cartPage.removeItemFromCart()
       cartPage.verifyCartIsEmpty()
     })
 it('Order confirmation message should be there',()=>{
      productPage.addToCartItem()
      productPage.clickonCartIcon()
      cartPage.clickOnCheckoutBtn()
      checkoutinfoPage.enterCheckOutInfo('Asad','Patel','60016')
      checkoutinfoPage.clickContinueBtn()
      checkout.clickonFinishBtn()
      confirmationtext.verifyConfirmationText()
     })
     })
 describe('Test with invalidusers and password', () => {
      
      beforeEach(() => {
          loginPage.navigate()
        })

     it('Login with locked_out_user and password', () => {
          cy.fixture('users').then((users) => {
          const lockedoutUser = users.lockedoutUser;
          loginPage.enterUsernameandPassword(lockedoutUser.username, lockedoutUser.password)
          loginPage.clickLogin()
          loginPage.getErrortextforlockoutuser();
        })
        })
     describe('Test with PROBLENUSER and password', () => {
      
      beforeEach(() => {
          loginPage.navigate()
        })
    it('using problem_user login product image should be incorrect',()=>{

          cy.fixture('users').then((users) => {
          const problemUser = users.problemUser;
          loginPage.enterUsernameandPassword(problemUser.username, problemUser.password)
          loginPage.clickLogin()
          productPage.verifyProductImg()
        })
        })
        })
        })
    

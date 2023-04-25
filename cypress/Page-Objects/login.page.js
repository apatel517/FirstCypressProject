export class LoginPage{


    navigate(){
      cy.visit('https://www.saucedemo.com')
    }
     usernameField = '#user-name'
     passwordField = '#password'
     loginBtn = '#login-button'
     errorMessageinvalidusername = 'h3[data-test="error"]'
     errorMessageinvalidpassword= 'h3[data-test="error"]'
     errorMessagelockoutuser = 'h3[data-test="error"]'
     
  
  
  enterUsernameandPassword(username,password){
   cy.get(this.usernameField).type(username)
   cy.get(this.passwordField).type(password)
  }
  clickLogin(){
    cy.get(this.loginBtn).click()
  }
   getErrortextforinvalidusername() {
      cy.get(this.errorMessageinvalidusername).should('have.text','Epic sadface: Username and password do not match any user in this service ')
  }
  getErrortextforinvalidusername() {
    cy.get(this.errorMessageinvalidpassword).should('have.text','Epic sadface: Username and password do not match any user in this service ')
  }
  getErrortextforlockoutuser(){
    cy.get(this.errorMessagelockoutuser).should('have.text','Epic sadface: Sorry, this user has been locked out.')
  }
  verifyloginBtnIsVisible(){
    cy.get(this.loginBtn).should('be.visible')
  }
  }

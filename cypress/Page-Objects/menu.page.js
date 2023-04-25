export class MenuPage{

    logoutBtn = '#logout_sidebar_link'

    clickonlogOutBtn(){
      cy.get(this.logoutBtn).click()
    }
}
export class CheckoutInfoPage{

       firstnamefield = '#first-name'
       lastnamefield ='#last-name'
       zipcodefield= '#postal-code'
       continueBtn ='#continue'

    enterCheckOutInfo(firstname,lastname,zipcode){
     cy.get(this.firstnamefield).type(firstname)
     cy.get(this.lastnamefield).type(lastname)
     cy.get(this.zipcodefield).type(zipcode)

    }
    clickContinueBtn(){
        cy.get(this.continueBtn).click()
    }

}
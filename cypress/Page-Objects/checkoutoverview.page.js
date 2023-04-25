export class CheckOutOverView{

    finishbtn = '#finish'

    clickonFinishBtn(){
        cy.get(this.finishbtn).click()
    }
}
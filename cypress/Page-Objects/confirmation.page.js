export class ConfirmationPage{

    ConfirmationText = '.complete-header'

verifyConfirmationText()
{
  cy.get(this.ConfirmationText).should('have.text','Thank you for your order!')
}
}
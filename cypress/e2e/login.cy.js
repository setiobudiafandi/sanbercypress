import * as object from "./ObjectRepo/pageLogin.cy.js"
import * as object1 from "./ObjectRepo/pageDashboard.cy.js"
import 'cypress-xpath';

describe('Login', () => {
  it('login sukses', () => {
    cy.login("Admin","admin123")
    //cy.wait(7000);
    cy.xpath(object1.text_dashboard).then($element => {
      // interact with the element as needed
      // for example, you can assert its existence
      expect($element).to.exist;
      // or click on the element
      cy.wrap($element).click();
    });
    
  })
})
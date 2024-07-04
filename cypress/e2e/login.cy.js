import * as object from "./ObjectRepo/pageLogin.cy.js"
import 'cypress-xpath';

describe('Login', () => {
  it('login sukses', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(object.field_username).type("Admin");
    cy.get(object.field_password).type("admin123");
    cy.get(object.btn_login).click();
    //cy.wait(7000);
    cy.xpath("//h6[text()='Dashboard']").then($element => {
      // interact with the element as needed
      // for example, you can assert its existence
      expect($element).to.exist;
      // or click on the element
      cy.wrap($element).click();
    });
    
  })
})
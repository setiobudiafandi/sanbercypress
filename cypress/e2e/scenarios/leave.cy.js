import * as object from "../ObjectRepo/pageLogin.cy.js"
import * as object1 from "../ObjectRepo/pageDashboard.cy.js"
import 'cypress-xpath'

before(()=>{
    cy.config("defaultCommandTimeout", 7000)
})

describe('Access Leave Menu', () => {
    beforeEach(() => {
        cy.login("Admin","admin123")
    })

    it('Success accessing leave menu',() => {
        cy.xpath(object1.leave_menu).click();
        cy.xpath(object1.text_leave).should("be.visible");
    })
})
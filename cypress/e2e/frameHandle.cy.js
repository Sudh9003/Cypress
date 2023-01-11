///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('i-frame validation',()=>{
    it('i-frame',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('.btn-theme btn-sm').click()

    })
})
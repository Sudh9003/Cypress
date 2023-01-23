///<reference types="cypress"/>
const homepage=require ('../pageObject/HomePage')
const screenOneData= require('../fixtures/example.json')
describe('Chebox Validation_StaticAndDynamicDropdown',()=>{
    
    beforeEach(()=>{
        cy.clearCookies()
        cy.viewport(1260,660)
        cy.visit(Cypress.config('baseUrl'))

    })
    it('checkBoxValidation',()=>{
        cy.get(homepage.ScreenOne.checkBox_one).check().should('be.checked').and('have.value','option1')
        cy.get(homepage.ScreenOne.checkBox_one).uncheck().should('not.be.checked')
        cy.get(homepage.ScreenOne.checkBoxOption_check).check(['option2','option3'])
    })

    it('staticAndDynamicDropdown',function(){
        cy.get('select').select('Option2')
        //if dropdown is dynamic
        cy.get(homepage.ScreenOne.suggestion_type).type(screenOneData.india)
        cy.get(homepage.ScreenOne.suggestion_dropdown).each(($el,index,list)=>{
        //    var cCode= $el.text()
        //    if(cCode.includes('India')){
        //     $el.trigger('click')
        //    } or
        if($el.text()==='India'){
            $el.trigger('click')
        }

        })
        
    })



})
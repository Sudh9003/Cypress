///<reference types="cypress"/>
describe('Chebox Validation_StaticAndDynamicDropdown',()=>{
    
    beforeEach(()=>{
        cy.viewport(1260,660)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

    })
    xit('checkBoxValidation',()=>{
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#checkbox-example fieldset label input').check(['option2','option3'])
    })

    it('staticAndDynamicDropdown',function(){
        cy.get('select').select('Option2')
        //if dropdown is dynamic
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').each(($el,index,list)=>{
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
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
/*npx cypress run --env tags="@Smoke" --headed --browser chrome*/
Given('Navigate To The Ecommerce Page',()=>{
    cy.visit(Cypress.env('url'))
})

When('I Add Items To Cart',function(){
    cy.get('input[name=name]:nth-child(2)').type(this.data.name)
      cy.get('input[name=email]').type(this.data.email)
      cy.wait(5000)
      Cypress.config('defaultCommandTimeout',6000)
      cy.get('select').select('Female')
      cy.get(':nth-child(2) > .nav-link').click()
      this.data.productName.forEach((element)=>{
        cy.selectProduct(element)
     }) 
})

When('Validate The Total Price',()=>{
    var sum=0
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    cy.get('tr td:nth-child(4)> strong').each((el,index,list)=>{
       var amount= el.text()
       var res= amount.split(" ")
       var re=res[1].trim()
       sum=Number(sum)+Number(re)
       //cy.log(sum) //Javascript is asynchronous so it will print 0, need to handle promise
    }).then(function(){
       cy.log(sum)
     })
      cy.get('h3 strong').then((ele)=>{
      var value= ele.text()
      var val=value.split(" ")
      var total= val[1].trim()

      expect(Number(total)).to.be.equal(sum)
    })
})
Then('Select Country And Verify Thank You Message',()=>{
    cy.wait(4000)
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
     cy.get('#country').type('India')
     cy.get('.suggestions > ul > li > a').click()
     cy.get('#checkbox2').click({force:true})
     cy.get("input[type='submit']").click()      
     cy.get('.alert').then((text)=>{
       var alertText=text.text()
       expect(alertText.includes('Success! Thank you! ')).to.be.true
     })
})
 When('Add Name and Email and Select Item',function(dataTable){
     // [Sudh, sudh@gmail.com] when .rawTable is called
     //row number 1 and 0 index
     cy.get('input[name=name]:nth-child(2)').type(dataTable.rawTable[1][0])
     cy.get('input[name=email]').type(dataTable.rawTable[1][1])
     cy.wait(5000)
     Cypress.config('defaultCommandTimeout',6000)
     cy.get('select').select('Female')
     cy.get(':nth-child(2) > .nav-link').click()
     this.data.productName.forEach((element)=>{
     cy.selectProduct(element)
     }) 
 })
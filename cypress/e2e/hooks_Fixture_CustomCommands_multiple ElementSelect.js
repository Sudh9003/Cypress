///<reference types="cypress"/>
describe('fixture and hooks validation',()=>{
    beforeEach(()=>{
        cy.fixture('example').then(function(data){
           this.data=data
        })
        cy.visit(Cypress.env('url'))
    })
    it('fixture validation',function(){
      cy.get('input[name=name]:nth-child(2)').type(this.data.name)
      cy.get('input[name=email]').type(this.data.email)
      cy.wait(5000)
    })
    it('fixture',function(){
      Cypress.config('defaultCommandTimeout',6000)
      cy.get('select').select('Female')
      cy.get(':nth-child(2) > .nav-link').click()
    //const array1 = ['a', 'b', 'c'];
    //array1.forEach(element => console.log(element));
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
      this.data.productName.forEach((element)=>{
        cy.selectProduct(element)
     }) 
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

})
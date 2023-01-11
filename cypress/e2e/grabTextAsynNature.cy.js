it('Cypress Grab Text',()=>{

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca');
    cy.get('.products').as('productList')
    cy.get('@productList').find('.product').eq(1).contains('ADD TO CART').click();
    // var text=cy.get('.brand')..//need to resolve the promise
    // cy.log(text.text());       //text() is not a cypress command SO we can't concatenate with cypress command
    // var tex=cy.get('.brand').text()..//gives error as cy.get()..text() is not a function
    // cy.log(tex)                      // So we need to resolve the promise by using .then() function.

    cy.get('.brand').then(function(val){ //resolving the promise with .then()
           cy.log(val.text())
    })
    cy.get('.brand').then((any)=>{
       cy.log(any.text())
    }) 
    cy.get('@productList').find('.product').each(($el,index,list)=>{
      const text=$el.find('h4.product-name').text()
        if(text.includes('Capsicum')){
            cy.log(text)
            $el.find('button').trigger('click')
        }
    })

}

)
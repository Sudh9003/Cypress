describe('Mocking HTTP Request',()=>{
   
    it('My First HTTP Request TCs',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({                  //requestObject
              method:'GET',
              url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'  
        },
            {                          //responseObject  
                statusCode:200,
                body:[{
                        "book_name": "RobotFramework",
                        "isbn": "984353",
                        "aisle": "982053"
                    }]
            }).as('Bookdetails')
        cy.get(".btn.btn-primary:contains(' Virtual Library ')").click()
        cy.wait('@Bookdetails').should(({request,response})=>   //wait till this promose get resolved
        {    
            cy.get('tr').should('have.length',response.body.length+1)
        })
        cy.get('p').should('have.text','Oops only 1 Book available')  
    })
})
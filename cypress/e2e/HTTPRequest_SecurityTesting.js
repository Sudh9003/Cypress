describe('Mocking HTTP Request For Security Testing',()=>{

    it('Security Testing By Mocking HTTP Request',()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{
           req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

           req.continue((res)=>{
              //expect(res.statusMessage).to.equal('The book by requested bookid \/ author name does not exists!')
              //expect(res.statusCode).to.equal(403)
           })
        }).as('dummyURL')
        cy.get(".btn.btn-primary:contains(' Virtual Library ')").click()
        cy.wait('@dummyURL')
    })
})
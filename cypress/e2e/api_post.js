describe('API Testing Using Post HTTP Method',()=>{

    it('API Testing',()=>{
      cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

      "name":"Learn Appium Automation with Java",
      "isbn":"bcd",
      "aisle":"227",
      "author":"John foe"

      }).then(()=>{
        expect(response.body).to.have.property('Msg','successfully added')
        expect(response.status).to.eq(200)
      })

    })

})
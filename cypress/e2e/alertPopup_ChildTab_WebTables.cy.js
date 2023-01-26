///<reference types="cypress"/>
describe('Handle Alert Popup and Child Window',()=>{

    beforeEach(()=>{
        cy.viewport(1260,660)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

})
  it('Validate alert',()=>{
       cy.get('#alertbtn').click()//cypress auto handles the alert 
       //how to verify the alert text
       cy.on('window:alert',function(str){
               expect(str).to.equal('Hello , share this practice page and share your knowledge')
       })
       cy.get('#confirmbtn').click()
       cy.on('window:confirm',(text)=>{
        expect(text).equal('Hello , Are you sure you want to confirm?')
       })

  })
  it('Handle Tab',function(){
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('contains','https://www.rahulshettyacademy.com/')
        cy.go('back')
  })
  it('WebTable validation',function(){
        cy.get('tr td:nth-child(2)').each(($el,index,list)=>{
               var text1= $el.text()
               if(text1.includes('Advanced Selenium')){
                cy.get('tr td:nth-child(2)').eq(index).next().then((fun)=>{
                        const text2=fun.text()
                        cy.log(text2)
                        expect(text2).equal('20')
                })
               }
        })
})
  it('Window Handle',()=>{
        cy.get('#opentab').then((fu)=>{
                const url=fu.prop('href')
                cy.visit(url)
       })
  })
})
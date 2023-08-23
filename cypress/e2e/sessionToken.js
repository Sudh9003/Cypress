const neatcsv=require ('neat-csv')
describe('Storing the Session Token and Login Using it',()=>{
var product   
    it('Login Using Session Token',async ()=>{
        cy.viewport(1280,660)
        cy.loginApi().then(()=>{

            cy.visit('https://rahulshettyacademy.com/client',{

                onBeforeLoad :function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(0).then((fun)=>{
            product= fun.text()
        })
        cy.get('.card-body>button:last-of-type').eq(0).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains('Checkout').click()
        cy.get("[placeholder*=Country]").type('Ind','{enter}')
        cy.wait(5000)
        // cy.get('.ta-results>button').each(($el,ind,$list)=>{
        //     if($el.text()==='India'){
        //       cy.wrap($el).click({force:true})
        //     }
        // })
        //cy.contains('CVV Code ').next().type('123').type('{enter}')
        cy.get('.btnn').click({force:true})
        cy.wait(2000)

        cy.get('.btn-primary').click()
        //Read CSV
        const configPath=Cypress.config('fileServerFolder')//to get the project path
        //C:\Sud\cypressProejct\cypress\downloads\order-invoice_sudh.csv
        cy.readFile(configPath +'/cypress/downloads/order-invoice_sudh.csv')
        .then(async (text)=>{
          const csv=await neatcsv(text)
          console.log(csv)
          const productName=csv[0] ["Product Name"]//if we have space in properties name then we can access in thesame way
          expect(productName).to.equal(product)
         
        })
        
    })
})

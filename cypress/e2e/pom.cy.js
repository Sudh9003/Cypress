/// <reference types="cypress"/>
import Login from '../pageObject/loginPageObject.cy'

const login = new Login()
it('POM',()=>{

    login.navigate('https://trytestingthis.netlify.app/')
    login.userName().type('test')
    login.passWord().type('test')
    login.submit().click()
    //cy.wait(2000);
    cy.get('h4 > a').click();
})
















export class Login{

    user_name = '#uname'
    pass_word = '#pwd'
    sub_mit = '[type="submit"]'

    navigate(url ){
       cy.visit(url);
    }
    userName(){
      return cy.get(this.user_name);
   }
    passWord(){
       return cy.get('#pwd');
    }
    submit(){
      return cy.get('[type="submit"]',{timeout:10000});
    }
}
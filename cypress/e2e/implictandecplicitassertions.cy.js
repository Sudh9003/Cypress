
it('implictAssertions',function(){
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain.text','Button')
    .should('be.enabled')
})

it('explicitAssertions',function(){
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click();
    expect(true).to.be.true
    let name='sudh';
    expect(name).to.be.equal('sudh');
    assert.equal(name,'sudh', 'Not Equal')

})
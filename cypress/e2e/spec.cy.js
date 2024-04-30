let testfunc = () => {
  it('is True', () => {
    expect(true).to.equal(true)
  })
}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@mail.com')
    cy.get('.action-email').should('have.value', 'fake@mail.com')
  })
})

//describe('true test', testfunc)


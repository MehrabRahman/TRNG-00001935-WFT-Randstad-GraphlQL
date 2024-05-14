import countriesQuery from "../fixtures/graphql-queries"

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

describe('GraphQL operations', () => {
  it('Query Countries API', () => {
    cy.request('POST', 'https://countries.trevorblades.com/', {
      query:`
        query{
          continents{
            name
          }
        }
      `
    }).its('body.data.continents')
    .should('have.length', 7)
  })

  it('Validate Countries API', () => {
    cy.request('POST', 'https://countries.trevorblades.com/', {
      query: countriesQuery
    }).then((response) => {
      const actual = response.body.data.countries
      cy.expect(actual[0]).to.have.property('name')
      cy.expect(actual[0].name).to.equal('Andorra')
    })
  })

  it('Query books', () => {
    cy.request('POST', "http://localhost:4000", {
      query:`
        query{
          books{
            title
            author
          }
        }
      `
    }).then((response) => {
      const actual = response.body.data.books
      cy.expect(actual[0]).to.have.property('title').to.equal('Fellowship of the Ring')
    })
  })
})
// cypress/e2e/login.cy.js

describe('Login', () => {
  const email = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')
  it('successfully logs in', () => {
    cy.guiLogin(email, password)

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})

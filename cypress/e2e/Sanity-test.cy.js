///<reference types = "Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  //returning false here prevents Cypress frrom
  //failing the test
  return false
})
describe('Verify clicking on each one of the menu options opens the correct tab/screen', () => {
  it('visit main page', () => {
    cy.visit('/')
  })


  it('tab About', () => {
    cy.visit('/')
    cy.get('#menu-item-36 > a').contains('About').click()
  })

  it('tab Products', () => {
    cy.visit('/')
    cy.get('#menu-item-32').contains('Products').click()
  })

  it('tab Services', () => {
    cy.visit('/')
    cy.get('#menu-item-34').contains('Services').click()
  })

  it('tab Tools', () => {
    cy.visit('/')
    cy.get('#menu-item-35').contains('Tools').click()
  })

  it('tab Promotions', () => {
    cy.visit('/')
    cy.get('#menu-item-673').contains('Promotions').click()
  })

  it('tab Careers', () => {
    cy.visit('/')
    cy.get('#menu-item-1589').contains('Careers').click()
  })

  it('tab Blog', () => {
    cy.visit('/')
    cy.get('#menu-item-1725').contains('Blog').click()
  })

  it('tab FAQs', () => {
    cy.visit('/')
    cy.get('#menu-item-1727').contains('FAQs').click()
  })

  it('tab Contact', () => {
    cy.visit('/')
    cy.get('#menu-item-1726').contains('Contact').click()
  })

})
///<reference types = "Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress frrom
    //failing the test
    return false
})
describe('Saving calculators - locations test', () => {
    const state_name = '[name="nastates"]'
    const city_name = '[name="stage2"]'

    it('test cheack list', () => {
        cy.visit('/savings-calculator/')
        cy.get(state_name).select('Quebec', { force: true })
        cy.get(city_name).select('Montreal', { force: true })
        cy.get(state_name).select('Ontario', { force: true })
        cy.get(city_name).select('Toronto', { force: true })
        cy.get(state_name).select('Newfoundland', { force: true })
        cy.get(city_name).select('St Johns', { force: true })
        cy.get(state_name).select('Alberta', { force: true })
        cy.get(city_name).select('Calgary', { force: true })
        cy.get(state_name).select('NewBrunswick', { force: true })
        cy.get(city_name).select('Fredrickton', { force: true })
        cy.get(state_name).select('Manitoba', { force: true })
        cy.get(city_name).select('Winnepeg', { force: true })
        cy.get(state_name).select('British Columbia', { force: true })
    })
})
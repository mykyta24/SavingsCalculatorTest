///<reference types = "Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress frrom
    //failing the test
    return false
})
describe('Saving calculator -  Heat Prices calculations', () => {
    const state_name = '[name="nastates"]'
    const city_name = '[name="stage2"]'
    it('test cheack list', () => {
        cy.visit('/savings-calculator/')
        cy.get(state_name).select('Ontario', { force: true })
        cy.get(city_name).select('Toronto', { force: true })

        cy.get('[name="stories"]').select('1',{ force: true })
        cy.get('[name="squarefeet"]').select('1000',{ force: true })
        cy.get('[name="houseage"]').type('5',{ force: true }).should('be.visible')

        cy.get('[name="heattype"]').select('Natural Gas',{ force: true })
        cy.get('[name="eheattype"]').select('65',{ force: true })
        cy.get('[name="heatingtype"]').select('HeatPump',{ force: true })
        cy.get('[name="eheatingtype"]').select('70',{ force: true })
        cy.get('[id="VTAS"]').should('not.eq','$0.00')
        cy.get('[id="VTES"]').should('not.eq','$0.00')
    })
})
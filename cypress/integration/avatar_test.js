/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.wthubspot.com/component-docs/?path=/story/');
        cy.get('#buttons-avatar', { timeout: 20000 }).click();
        cy.get('#buttons-avatar-component', { timeout: 20000 }).click();
    })

    describe('Buttons', function() {
        describe('Components', function() {
            describe('Editable', function() {
                it(' Find href Avatar -> Component -> Editable should leads to editable page', function () {
                    /** 
                    *** Arrange  - setup
                    *** Visit webpage
                    *** Query for an element
                    *** Take action on element
                    *** Interact with the element
                    *** Assert - Make an assertion 
                    **/
        
                    cy.url()
                        .should('includes', '/buttons-avatar-component--editable');
                    
                    // Take a snapshot for visual diffing
                    cy.percySnapshot();
                });
        
                it(' It should have Four controls', function () {
                    cy.get('#buttons-avatar-component--editable').click();
                    cy.get('#tabbutton-controls-1').should('have.text', 'Controls (1)');
                    cy.percySnapshot();
                });
    
                it(' Having 0 violations', function () {
                    cy.get('#buttons-avatar-component--editable').click();
                    cy.get('#tabbutton-accessibility').click();
    
                    cy.get('.css-qacwg0').should('have.text', '0 Violations');
                });
    
                it(' Having 5 passes', function () {
                    cy.get('#buttons-avatar-component--editable').click();
                    cy.get('#tabbutton-accessibility').click();
    
                    cy.get('.css-fg630j').should('have.text', '5 Passes');
                });

                it(' Having 0 incomplete', function () {
                    cy.get('#buttons-avatar-component--editable').click();
                    cy.get('#tabbutton-accessibility').click();
    
                    cy.get('.css-iau1th').should('have.text', '0 Incomplete');
                });
            })
        })
    })
})
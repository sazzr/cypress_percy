/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/?path=/story/');
        cy.get('#buttons-avatar').click();
        cy.get('#buttons-avatar-component').click();
    })

    describe('Avatar Buttons', function() {
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
                    cy.get('#tabbutton-controls-4').should('have.text', 'Controls (4)');
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
    
                    cy.get('.css-fg630j').should('have.text', '7 Passes');
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
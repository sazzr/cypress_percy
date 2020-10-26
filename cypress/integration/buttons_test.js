/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.wthubspot.com/component-docs/?path=/story/');
        cy.get('#buttons-button', { timeout: 20000 }).click();
        cy.get('#buttons-button-component', { timeout: 20000 }).click();
    })

    describe('Buttons', function() {
        describe('Components', function() {
            describe('Editable', function() {
                it(' Find href Buttons -> Component -> Editable should leads to editable page', function () {
                    /** 
                    *** Arrange  - setup
                    *** Visit webpage
                    *** Query for an element
                    *** Take action on element
                    *** Interact with the element
                    *** Assert - Make an assertion 
                    **/
        
                    cy.url()
                        .should('includes', '/buttons-button-component--editable');
                });
        
                it(' It should have Four controls', function () {
                    cy.get('#buttons-button-component--editable').click();
                    cy.get('#tabbutton-controls-4').should('have.text', 'Controls (4)');
                });
    
                it(' Having one violations', function () {
                    cy.get('#buttons-button-component--editable').click();
                    cy.get('#tabbutton-accessibility').click();
    
                    cy.get('.css-qacwg0').should('have.text', '1 Violations');
                });
    
                it(' It should have 2 passes', function () {
                    cy.get('#buttons-button-component--editable').click();
                    cy.get('#tabbutton-accessibility').click();
    
                    cy.get('.css-fg630j').should('have.text', '2 Passes');
                });
            })
        })
    })
})
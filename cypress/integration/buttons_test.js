/// <reference types="cypress" />

context('Buttons', () => {
    beforeEach(() => {
        cy.visit('/?path=/story/');
        cy.get('#buttons-button').click();
        cy.get('#buttons-button-component').click();
    })

    
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
                cy.get('#tabbutton-controls-6').should('have.text', 'Controls (6)');
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

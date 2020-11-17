/// <reference types="cypress" />

describe(' [Avatar] ', function() {
    context('Component -> Editable', () => {
        beforeEach(() => {
            cy.visit('/?path=/story/');
            cy.get('#buttons-avatar').click();
            cy.get('#buttons-avatar-component').click();
        })

        it('[Is avatar edit clickable', function () {
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
    
        it('Does avatar editable have four controls', function () {
            cy.get('#buttons-avatar-component--editable').click();
            cy.get('#tabbutton-controls-4').should('have.text', 'Controls (4)');
            cy.percySnapshot();
        });
    
        it('Avatar editable should have 0 accessibility violations', function () {
            cy.get('#buttons-avatar-component--editable').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-qacwg0').should('have.text', '0 Violations');
        });
    
        it('Does 7 test passed', function () {
            cy.get('#buttons-avatar-component--editable').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-fg630j').should('have.text', '7 Passes');
        });
    
        it('Should have 0 incomplete', function () {
            cy.get('#buttons-avatar-component--editable').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-iau1th').should('have.text', '0 Incomplete');
        });
    })
})


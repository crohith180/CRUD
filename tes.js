/// <reference types="cypress"/>

it('visit',()=>{
    cy.visit("/")
    
    cy.get('.log-in > .table > .table-cell > form > :nth-child(1) > .form-control').click().type(Cypress.env('email-id '))
    cy.get('.log-in > .table > .table-cell > form > :nth-child(2) > .form-control').click().type(Cypress.env('password'))
    cy.get('.log-in > .table > .table-cell > form > .text-center > .btn').should('be.visible').click()
    // cy.wait(10000)
})

it('Asset manager',()=>{
    cy.contains('Asset Manager').click()
    // cy.url().should('eq', Cypress.config().baseUrl + '/AssetManager')
    cy.url().should('include', '/AssetManager')
})
    let beforeResponse;
    let  afterResponse;
    var count;
    var count1;

it('IP Ranges',()=>{
        cy.contains('IP Ranges').click()
        cy.url().should('include', '/AssetManager?tab=ip_range')

            cy.get('[class="table table-striped asset-table dark-table"]').should(($tbody)=>{
                beforeResponse =$tbody.find('tr')
                 count= $tbody[0].rows.length;
                  console.log(beforeResponse)
                  console.log(count)
                  })
            
        cy.get('#iprange > :nth-child(1) > :nth-child(1) > .add-asset-btn > .btn').should('be.visible').click() // Create
        cy.get('#assetModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .form-control').click().type('75.125.265.32')
        cy.get('#assetModal > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > .form-control').click().type('Demo Method')
        cy.get('#assetModal > .modal-dialog > .modal-content > .modal-footer > .update-pass-btn').click()
        cy.wait(9000)
        
        cy.get('[class="table table-striped asset-table dark-table"]').should(($tbody)=>{
        afterResponse =$tbody.find('tr')
        count1 = $tbody[0].rows.length;
        console.log(afterResponse)
        console.log(count1)
        expect(count1).greaterThan(count)
    
    })
        cy.get(':nth-child(6) > [data-target="#ipEditModal"] > .small-img-height').click() // Edit or Update
        cy.get('#ipEditModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .form-control').clear().type('75.125.265.31')
    
        cy.get('#ipEditModal > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > .form-control').clear().type('Test Method')
        cy.get('#ipEditModal > .modal-dialog > .modal-content > .modal-footer > .update-pass-btn').click()
    
        cy.get(':nth-child(6) > :nth-child(7) > .main-btn').click() // Read
        cy.go('back')
        
        cy.get(':nth-child(6) > [data-target="#ipDeleteModal"]').click()// Delete
        cy.get('#ipDeleteModal > .modal-dialog > .modal-content > form > .modal-footer > .content-main-btns > [style="text-align: center;"]').click()
        
    })
    
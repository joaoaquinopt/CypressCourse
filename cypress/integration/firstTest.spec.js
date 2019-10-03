/// <reference types="cypress" />

describe('Our first suite', () => {

    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by Tag Name
        cy.get('input')

        //by ID value
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="Email"]')

        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        //by two different attibutes
        cy.get('[placeholder="Email"][nbinput]')

        //by Tag name, Attribute with value, ID value and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recommended by Cypress: make your own attribute
        cy.get('[data-cy="imputEmail1"]')

    })

    it.only('find web elements', () => {

        //cy.get('')
        //cy.find('')
        //cy.contains('')

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

    //1. Add your own locator
        cy.get('[data-cy="signin"]')

    //2. Find by text
        cy.contains('Sign in')

     //3. Find By selector and text   
        cy.contains('[status="warning"]','Sign in')

     //4. Use unique "KEY" locator and travel through the DOM
        cy.get('#inputEmail3').parents('form').find('button').should('contain', 'Sign in').parents('nb-card').find('nb-checkbox').click()
    
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

     //you CAN't call child command from the cy.   
        cy.find('button')
    })


})



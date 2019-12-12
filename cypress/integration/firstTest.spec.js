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

    it('find web elements', () => {

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

    it.only('then and wrap', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        //selenium
        // const fistForm = cy.contains('nb-card', 'Using the Grid')
        // const secondForm = cy.contains('nb-card', 'Basic form')

        // fistForm.find('[for="inputEmail1"]').should('contain', 'Email')
        // fistForm.find('[for="inputPassword2"]').should('contain', 'Password')
        // secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //cypress style

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordSecondText)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

            })

        })


    })

})



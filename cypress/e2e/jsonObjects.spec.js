/// <reference types="cypress" />

describe('JSON objects', () => {
    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2"}

        const simpleArrayOfValues = ["one", "two", "three"]

        const arrayObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]
        
        const typesOfData = {"string": "this is a string", "number": 100}

        const mix = {
            "FirstName": "Allan",
            "LastName": "Oliver",
            "Age": 34,
            "Students": [
                {
                    "fisrtName": "Sara",
                    "lastName": "Abreu"
                },
                {
                    "firstName": "Jose",
                    "lastName": "Armando"
                }
            ]
        }
        
    });
});
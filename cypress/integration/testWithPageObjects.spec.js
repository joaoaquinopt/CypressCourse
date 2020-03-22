import { navigateTo } from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"


const runOn = (browser, fn) => {
    if (Cypress.isBrowser(browser)) {
      fn()
    }
  }
  
  const ignoreOn = (browser, fn) => {
    if (!Cypress.isBrowser(browser)) {
      fn()
    }
  }

describe('tests with page objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    ignoreOn('firefox', () => {
        it('verify navigation across the pages', () => {
            navigateTo.formsLayoutsPage()
            navigateTo.datepickerPage()
            navigateTo.toasterPage()
            navigateTo.smartTablePage()
            navigateTo.tooltipPage()
        })
    })
    

    it('should submit Inline and Basic form and select the tomorrow date in the calendar', () => {
        navigateTo.formsLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem Bondar', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'somePassword')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatePickerWithRangeFromToday(7,14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
        onSmartTablePage.updateAgeByFirstName('Artem', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })



})
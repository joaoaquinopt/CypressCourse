import { onDatePickerPage } from "../support/page_objects/datepickerPage.js";
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage.js";
import { navigateTo } from "../support/page_objects/navigationPage.js"
import { onSmartTable } from "../support/page_objects/smartTablePage.js";

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it.only('Should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Joao', 'joao@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('aquino@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTable.addNewRecordWithFirstAndLastName('Artem', 'Bond')
        onSmartTable.updateAgeByFistName('Artem', '34')
        onSmartTable.deleteRowByIndex(1)  
    })
});
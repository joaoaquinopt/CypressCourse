import { initEnv, mount } from 'cypress-angular-unit-test';
import { AppComponent } from '../../../app.component';
import { DatepickerComponent} from './datepicker.component';

describe('AppComponent', () => {

    it('first component test', () => {
        initEnv(AppComponent);
        mount(DatepickerComponent);

    })
})


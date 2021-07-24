import { OnInit, Component } from '@angular/core';

class Customer {
    constructor(
        public name?: any,
        public code?: any
    ) {
    }
}
@Component({
    selector: 'app-life-cycle-hooks',
    templateUrl: 'life-cycle-hooks.html'
})
export class LifeCycleHooksComponent implements OnInit {
    checkChanges: string;
    customer: Customer;
    name = '';
    code = 0;
    constructor() {
        this.customer = new Customer();
    }
    ngOnInit() {
    }
    updateCustomer() {
        /*this.customer.name = this.name;
        this.customer.code = this.code;*/
        this.customer.name = 'sri';
    }
}

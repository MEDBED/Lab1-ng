import {Component, OnInit, ViewChild} from '@angular/core';
import {customer} from '../Models/customer'
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    Customers: Array<customer>;
    IsAddNew: boolean = false;
    FName: string = '';
    LName: string = '';
    @ViewChild('myForm') CustomerForm: NgForm | undefined;

    constructor() {
        this.Customers = new Array<customer>();
        this.Customers.push(new customer(' MOHAMED', 'BOUHAMED'));
        this.Customers.push(new customer('ANGULAR', 'IS THE BEST'));
        this.Customers.push(new customer('FRONTEND ', 'FRAMEWORK'));
    }

    AddNew() {
        this.IsAddNew = true;
    }

    save() {
        this.Customers.push(new customer(this.FName, this.LName));
        this.rest();
        this.IsAddNew = false
    }

    rest() {
        //this.FName = '';
        //this.LName = '';
        this.CustomerForm?.reset();
        this.IsAddNew = false
    }

    ngOnInit(): void {
    }

}

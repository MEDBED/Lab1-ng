import { Component, OnInit } from '@angular/core';
import {customer} from '../Models/customer'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

Customers: Array<customer>;
IsAddNew:boolean = false;
FName : string = '';
LName : string = '';

  constructor() {
  this.Customers = new Array<customer>();
  this.Customers.push(new customer(' Mohamed','BOUHAMED'));
  this.Customers.push(new customer(' Emna','BORGI'));
  this.Customers.push(new customer(' Haroun','BOUHAMED'));
   }
   AddNew(){
   this.IsAddNew=true;
   }
   save(){
   this.Customers.push(new customer(this.FName,this.LName));
   this.rest();
   this.IsAddNew = false}
   rest(){
   this.FName = '';
   this.LName = '';
   this.IsAddNew = false
   }

  ngOnInit(): void {
  }

}

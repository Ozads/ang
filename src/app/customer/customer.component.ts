import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../services/customer.service';
import { error } from 'util';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private _customer:CustomerService) { }

  createForm:FormGroup;
  data:any;

  ngOnInit() {
    this.createForm=new FormGroup(
      {
        latitude:new FormControl(),
        longitude:new FormControl(),
        email:new FormControl(),
        fullName: new FormControl(),
        password: new FormControl(),
        phoneNo: new FormControl()
      }
    )
  }

  createFormSubmit(){
    console.log('Form:',this.createForm);

      this._customer.create(this.createForm.value).subscribe(data =>{
        console.log('Created user data' ,data);
        alert("Successfully Registered Check email to verify");
        
      },
      error=>{
        console.log('Create user error', error);
        alert("Successfully Registered Check email to verify");
  
      });
  }

}

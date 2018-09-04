import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config.config';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  create(value){
    return this._http.post(config.customerCreation,value);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://api.postalpincode.in/pincode/';
  
  constructor(private httpClient: HttpClient) {}

  getApi(pin:number) {
    return this.httpClient.get(this.apiURL+pin);
  }
 
}

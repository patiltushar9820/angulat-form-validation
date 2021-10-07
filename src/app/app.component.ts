import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from './form';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Form Validation !!';
   angForm!: FormGroup;
  
   userList :Form[]=[];

    pin1!: number;

    status:string | undefined;
  //api:string="https://api.postalpincode.in/pincode/";

  pincode:Array<any>=new Array();

  constructor(private  ApiService:ApiService) {}
    
    onSubmit() {
      this.userList.push(this.angForm.value);
  

      //this.api1=this.api+this.pin;
      //console.log(this.api+this.pin1);

    if (this.angForm.invalid) {    
        return;
      }
      else{
      //  reset form.
           this.angForm.reset();
      }
      
    }

   validate(){
    this.pin1=this.angForm.value.pincode;
    this.ApiService.getApi(this.pin1).subscribe(message =>
      {
        /*if(message!==0){
        console.log("failes msg ",message)
        console.log("failed")
        }
        else{
          console.log("success msg ",message)
        console.log("Success")
        }
        */
        
       this.pincode.push(message)
       console.log(message)
       /* if( this.pincode[0].Status==="Success"){
        this.status="Success";
        console.log(this.status);
        //return this.status;
   }else{
          this.status="null";
          console.log(this.status)
          //return this.status;
       }
       */

      })

     
   }

    get f(){
      return this.angForm.controls;
    }
  
  ngOnInit(): void {
   
      this.angForm = new FormGroup({
      name:new FormControl('',[ Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)]),
      address:new FormControl('',[ Validators.required,Validators.email]),
      contact:new FormControl('',[ Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      pincode: new FormControl('',[ Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')]),

     
  });
  }
}

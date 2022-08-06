import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // userName: string="hi";
  public signupForms !: FormGroup;
  constructor( private formbuilder: FormBuilder, private http:HttpClient, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.signupForms= this.formbuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']

    })

  }

  signUp(){
    this.http.post<any>("http://localhost:4000/signupUsers", this.signupForms.value)

    .subscribe(res=>{
      // alert("signup successfull");
      this.toastr.success('Signup successfully!');
      localStorage.setItem('credentials',JSON.stringify(this.signupForms.value));
      localStorage.setItem('password',JSON.stringify(this.signupForms.value.password))
      this.signupForms.reset();
      this.router.navigate(['login']);
      // localStorage.setItem('session',JSON.stringify(this.signupForms.value.fullname))
    },err=>{
      // alert("something went wrong")
      this.toastr.warning('something went wrong!');
    })
    console.log(this.signupForms.value)
    }




  }



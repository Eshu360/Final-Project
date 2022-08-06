import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formbuilder: FormBuilder, private http:HttpClient, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password:['']

    })
  }
login(){
 this.http.get<any>("http://localhost:4000/signupUsers")
 .subscribe(res=>{
  const user= res.find((a:any)=>{
    return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  });
  if(user){
    // alert("login success");
    this.toastr.success('Login successfully!',"hi "+user.fullname);


    this.loginForm.reset();
    this.router.navigate(['dashboard']);
    localStorage.setItem('session',JSON.stringify(user.fullname))
    localStorage.setItem('email',JSON.stringify(user.email))

  }else{
    // alert("user not found")
    this.toastr.error('Login failed!');
  }
 },err=>{
  // alert("something went wrong")
  this.toastr.warning('Something went wrong');
 })
}
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // @ViewChild(SignupComponent) child !: SignupComponent;
  name:any
  constructor() { }

  // ngAfterViewInit(): void {
  //   // console.log(this.child.userName);
  //   // alert(this.child.userName)

  // }

  ngOnInit(): void {
    let name:any=localStorage.getItem('session')
    this.name=JSON.parse(name)


  }
  removeData(){
    localStorage.removeItem(this.name);
    //  localStorage.clear();

    // alert(this.name)

  }

}

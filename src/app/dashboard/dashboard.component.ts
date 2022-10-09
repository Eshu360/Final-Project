import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import { SignupComponent } from '../signup/signup.component';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  opened=false

  // @ViewChild(SignupComponent) child !: SignupComponent;
  name:any

  constructor(private dialog: MatDialog) { }

  // ngAfterViewInit(): void {
  //   // console.log(this.child.userName);
  //   // alert(this.child.userName)

  // }

  ngOnInit(): void {
    let name:any=localStorage.getItem('session')
    this.name=JSON.parse(name)


  }
  openDialog() {
    this.dialog.open(UserDataComponent,{
      width : '30%'

      }).afterClosed().subscribe((val: string)=>{
        if(val==="save"){

        }
      })

  }
  removeData(){
    localStorage.removeItem(this.name);
     localStorage.clear();

    // alert(this.name)

  }

}

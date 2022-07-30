import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data: any;
  name:any;
  userList:any;



  constructor(private http:HttpClient,private api:ApiService) { }

  ngOnInit(): void {
    // let data:any=localStorage.getItem('credentials')
    // this.data=JSON.parse(data)
    // console.log(data)

  }
  showData(){
    // localStorage.clear();
    // localStorage.removeItem(this.data);
    this.http.get<any>("http://localhost:4000/signupUsers")
    .subscribe(res=>{
    console.log(res)
    this.userList=res
    console.log(this.userList.mobile)
    })
  }

  resetData(){
   this.http.delete("http://localhost:4000/signupUsers")
   .subscribe(res=>{
    console.log(res)
   })
  }

}



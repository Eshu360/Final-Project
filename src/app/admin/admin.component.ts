import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from '../services/api.service'
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data: any;
  name:any;
  userList:any;
  nameList: any[] = [];
  dataSource = this.nameList;
  displayedColumns=['fullname','email','password','mobile','action']





  constructor(private http:HttpClient,private api:ApiService,private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  showData(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
    console.log(res)
    this.userList=res
    for (var i=0;i<res.length;i++){
      this.nameList[i]=res[i]
      console.log(typeof(this.nameList))

    }
    this.dataSource = this.nameList;
    console.log(this.dataSource)

    })
  }

  deleteData(id:number){
    this.api.deleteDataTable(id)
    .subscribe({
      next:(res)=>{
        alert("data deleted Successfully")
        this.showData()

      },
      error:()=>{
        alert("Error while deleting record")
      }
    })
  }

}



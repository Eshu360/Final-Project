import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  opened = false

  name: any

  constructor(private dialog: MatDialog, private routers: Router, private active_router: ActivatedRoute) { }


  ngOnInit(): void {
    let name: any = localStorage.getItem('session')
    this.name = JSON.parse(name)


  }
  openDialog() {
    this.dialog.open(UserDataComponent, {
      width: '30%'

    }).afterClosed().subscribe((val: string) => {
      if (val === "save") {

      }
    })

  }
  removeData() {
    localStorage.removeItem(this.name);
    localStorage.clear();


  }

  product_button() {

    this.routers.navigate(["dashboard/product"])

  }

  charts_btn() {
    this.routers.navigate(["dashboard/charts/barchart"])
  }

}

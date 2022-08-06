import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  public msg:any
  public parent="this is parent msg"
  // count=0;


  constructor() { }

  ngOnInit(): void {
  }
  // onClick(type :string){

  //   type==='+'?this.count++:this.count--
  //   console.log(this.count)

  // }

}

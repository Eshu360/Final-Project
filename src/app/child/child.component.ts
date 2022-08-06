import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public pink={backgroundColor: 'pink'};
  public green={backgroundColor: 'green'};
  public black={backgroundColor: 'black'};
  public red={backgroundColor: 'red'};
  count=0;

  @Output() public childInfo=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  childMsg(){
    this.childInfo.emit("child msg")
  }
  clickPink(){
    this.childInfo.emit(this.pink)


  }
  clickGreen(){
    this.childInfo.emit(this.green)
  }
  clickBlack(){
    this.childInfo.emit(this.black)
  }
  clickRed(){
    this.childInfo.emit(this.red)
  }
onClick(type :string){

  type==='+'?this.count++:this.count--
  console.log(this.count)
  this.childInfo.emit(this.count)

}

}

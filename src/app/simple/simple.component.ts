import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit,OnChanges {

  @Input("simpleText") simpleText : String;

  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    for(let prop in changes){
      let change=changes[prop];
      let current=JSON.stringify(change.currentValue);
      let previous=JSON.stringify(change.previousValue);
      console.log("currentValue : ",current," , previousValue : ",previous);
    }
  }

  ngOnInit(): void {
  }

}

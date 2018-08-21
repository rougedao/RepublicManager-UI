import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dinamic-list',
  templateUrl: './dinamic-list.component.html',
  styleUrls: ['./dinamic-list.component.css']
})
export class DinamicListComponent implements OnInit {
  //The input keyword bellow will define an allias for the input properties
  @Input('Property1') property1: any[];
  @Input('Property2') property2: any[];
  @Input('Property3') property3: any[];

  constructor() { }
  ngOnInit() {
  }
}

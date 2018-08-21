import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dinamic-list',
  templateUrl: './dinamic-list.component.html',
  styleUrls: ['./dinamic-list.component.css']
})
export class DinamicListComponent implements OnInit {
  @Input() property1:any[];
  public property2:any[];
  public  property3:any[];

  constructor() { }

  ngOnInit() {
    
  }

}

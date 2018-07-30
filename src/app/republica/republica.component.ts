import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-republica',
  templateUrl: './republica.component.html',
  styleUrls: ['./republica.component.css']
})
export class RepublicaComponent implements OnInit {
republicas = ["Republica dos Dev","Republica Das Oito", "L33T Republic"]
  constructor() { }

  ngOnInit() {
  }

}

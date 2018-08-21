import { DinamicListComponent } from './../dinamic-list/dinamic-list.component';
import { LoginComponent } from '../login/login.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem vindo ao Republica Manager';
   property1= ["property1","property2","property3"];
}

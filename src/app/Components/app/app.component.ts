import { DinamicTableComponent } from './../shared/dinamic-table/dinamic-table.component';
import { DinamicListComponent } from '../shared/dinamic-list/dinamic-list.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem vindo ao Republica Manager';
   Property1 = ['property1', 'property2', 'property3'];
}

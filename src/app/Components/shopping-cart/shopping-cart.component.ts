import { Component, OnInit } from '@angular/core';
import { RepublicaService } from '../../services/republica.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log('Im in the republica listing');
    // this.republicaService.getAll().subscribe(response => {
    //   console.log(response);
    // });
  }
}

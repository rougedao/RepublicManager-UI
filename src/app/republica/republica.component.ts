import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-republica',
  templateUrl: './republica.component.html',
  styleUrls: ['./republica.component.css']
})
export class RepublicaComponent implements OnInit {
republicas = ["Republica dos Dev","Republica Das Oito", "L33T Republic"]
pokemons;
  constructor(
  ) {
    let service = new PokemonService();
    this.pokemons = service.getPokemons();
   }

  ngOnInit() {
    console.log(this.pokemons)
  }

}

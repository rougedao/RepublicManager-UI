import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'republic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {
    pokemons;
    usuarios:any[];
    constructor(private usuarioService:UsuarioService) { }
  
    ngOnInit() {
      this.usuarioService.getUsuarios()
      .subscribe(response =>
        this.usuarios = response.json());
      }
      SalvarEditar(){
        //implementar função de salvar aqui
        alert("os dados foram salvos");
      }
  }
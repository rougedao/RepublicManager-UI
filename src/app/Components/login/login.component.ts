import { FormsModule } from '@angular/forms';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'republic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {
    usuarios:any[];
    usuario:string;
    email:string;
    senha:string;

    constructor(private usuarioService:UsuarioService) { }
  
    ngOnInit() {
      this.usuarioService.getUsuarios()
      .subscribe(response =>
        this.usuarios = response.json());
      }
      SalvarEditar(){
        //implementar função de salvar aqui
        alert(this.usuario+this.senha+this.email)
        alert("os dados foram salvos");
      }
  }
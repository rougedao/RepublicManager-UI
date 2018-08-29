import { Usuario } from '../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterComponent implements OnInit {
  usuario:Usuario={
    Email:"",
    Id:0,
    Login:"",
    Nome:"",
    Senha:""
  }
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  Login(){
    console.log(this.usuario);
  }
  NewUser(){
    this.usuarioService.post(this.usuario)
    .subscribe(
      response =>{
        console.log(response.json());
      };
  }

}

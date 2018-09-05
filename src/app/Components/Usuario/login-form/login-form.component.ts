import { RouterModule,Routes } from '@angular/router';
import { BadInput } from './../../../models/error classes/bad-input';
import { NotFoundError } from './../../../models/error classes/not-found-error';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'republic-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) { }

  usuario: Usuario = {
    Login: "",
    Nome:"",
    Email: "",
    Senha: "",
    Id: 0
  };
  
  ngOnInit() {
    // this.usuarioService.getAll()
    //   .subscribe(usuarios =>  this.usuarios = usuarios,
    //     error =>{
    //     if(error instanceof BadInput)
    //       alert('Não foi possível realizar essa operação');
    //     if(error instanceof NotFoundError)
    //       alert('this ur is not found');
    //       else throw error;
    //     });
  }

  AutenticarUsuario() {
    //implementar função de salvar aqui
    this.usuarioService.post(this.usuario)
    .subscribe(usuarios =>  console.log("usuario criado"),
      error =>{
      if(error instanceof BadInput)
        alert('Não foi possível realizar essa operação');
      if(error instanceof NotFoundError)
        alert('this ur is not found');
        else throw error;
      });
  }
}
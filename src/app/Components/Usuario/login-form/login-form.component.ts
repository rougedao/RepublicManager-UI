import { Http } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { BadInput } from './../../../models/error classes/bad-input';
import { NotFoundError } from './../../../models/error classes/not-found-error';
import { UsuarioService } from '../../../services/usuario.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Usuario } from '../../../models/usuario';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'republic-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations: [
    trigger('fade', [
      // state(),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private authenticationService: AuthenticationService, private router: Router) { }
  invalidLogin = true;
  usuario: Usuario = {
    Login: '',
    Nome: '',
    Email: '',
    Senha: '',
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
    // implementar função de salvar aqui
    // this.usuarioService.getAll(this.usuario)
    // .subscribe(usuarios =>  console.log('usuario criado'),
    //   error => {
    //   if (error instanceof BadInput) {
    //     alert('Não foi possível realizar essa operação');
    //   }
    //   if (error instanceof NotFoundError) {
    //     alert('this ur is not found');
    //   } else { throw error; }
    //   });
  }
  login() {
    this.authenticationService.post(this.usuario).subscribe( response => {
      console.log(response);
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      console.log(this.invalidLogin = false);
      this.invalidLogin = false;
      if ( this.invalidLogin === false ) {
        this.router.navigate(['/republica']);
      }
    }, err => {
      this.invalidLogin = true;
    });
  }
}

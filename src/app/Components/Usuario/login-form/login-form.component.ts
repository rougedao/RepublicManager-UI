import { JwtHelperService } from '@auth0/angular-jwt';
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
import { stringify } from '@angular/core/src/util';

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
  constructor(private usuarioService: UsuarioService
    , private authenticationService: AuthenticationService, private router: Router, private jwt: JwtHelperService) { }
  invalidLogin = false;
  InvalidLoginMessage: string;
  usuario: Usuario = {
    Login: '',
    Nome: '',
    Email: '',
    Senha: '',
    Id: 0,
    // roles: [],
    roleId: 0
  };

  ngOnInit() {  }

  login() {
    this.authenticationService.post(this.usuario).subscribe( response => {
      if ( response['authenticated'] === false) {
        this.invalidLogin = true;
        this.InvalidLoginMessage = response['message'];
      } else {
        this.invalidLogin = false;
        const token = (<any>response).accessToken;
        localStorage.setItem('jwt', token);
        this.router.navigate(['/navbar']);
      }
    }, err => {
      this.invalidLogin = true;
    });
  }
  logOut() {
    localStorage.removeItem('jwt');
  }
}

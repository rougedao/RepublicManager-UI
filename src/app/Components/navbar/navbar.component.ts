import { AuthenticationService } from './../../services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsuarioService } from './../../services/usuario.service';
import { RepublicaService } from '../../services/republica.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrentQueries } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private usuarioService: UsuarioService,
    private republicaService: RepublicaService, private authService: AuthenticationService) { }
  ngOnInit() {
  }
  logOut() {
    this.authService.logOut();
  }
}

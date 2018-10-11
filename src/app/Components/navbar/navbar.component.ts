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
  constructor(private usuarioService: UsuarioService, private republicaService: RepublicaService
    , private router: Router, private jwt: JwtHelperService) { }
  readonly decodedToken = this.jwt.decodeToken(localStorage.getItem('jwt'));
  readonly currentUser: string = this.decodedToken.unique_name[0];
  ngOnInit() {
    console.log(this.jwt.decodeToken(localStorage.getItem('jwt')));
  }
  logOut() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}

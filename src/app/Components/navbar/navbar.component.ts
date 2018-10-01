import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem('jwt');
    console.log('Logged Out!');
    this.usuarioService.getAll().subscribe( response => {
      console.log('im here');
      console.log(response);
    });
  }
  getUsers() {
    this.usuarioService.getAll().subscribe( response => {
      console.log('im here');
      console.log(response);
    });
  }

}

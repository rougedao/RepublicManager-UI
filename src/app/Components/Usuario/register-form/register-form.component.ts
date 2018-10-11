import { RoleService } from './../../../services/role.service';
import { RouterModule, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-register',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: Usuario = {
    Email: '',
    Id: 0,
    Login: '',
    Nome: '',
    Senha: ''
  };
  roles: Role[];
  constructor(private usuarioService: UsuarioService, private roleService: RoleService, private route: Router) { }
  ngOnInit() {
    this.roleService.getAll().subscribe( response => {
      this.roles = JSON.parse(JSON.stringify(response));
    });
    }
  NewUser() {
    this.usuarioService.post(this.usuario)
    .subscribe();
      this.route.navigate(['republica']);
  }
}

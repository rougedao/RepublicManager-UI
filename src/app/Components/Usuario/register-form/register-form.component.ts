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
  roles: Role[];
  usuario: Usuario = {
    Email: '',
    Id: 0,
    Login: '',
    Nome: '',
    Senha: '',
    roleId: 3
  };
  selectRoleId = this.usuario.roleId;

  constructor(private usuarioService: UsuarioService, private roleService: RoleService, private route: Router) { }
  ngOnInit() {
    this.roleService.getAll().subscribe(response => {
      this.roles = JSON.parse(JSON.stringify(response));
      console.log(this.roles);
    });
  }
  NewUser() {
    this.usuario.roleId = this.selectRoleId;
    console.log(this.usuario);
    this.usuarioService.post(this.usuario)
      .subscribe();
    this.route.navigate(['republica']);
  }
}

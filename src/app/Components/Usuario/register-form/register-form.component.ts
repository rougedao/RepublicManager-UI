import { RoleService } from './../../../services/role.service';
import { RouterModule, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Role } from 'src/app/models/role';
import { FormControl, Validators } from '@angular/forms';

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
    roleIds: 0,
  };
  selectedRoles = this.usuario.roleIds;
  permissionControl = new FormControl('', [Validators.required]);
  constructor(private usuarioService: UsuarioService, private roleService: RoleService, private route: Router) { }
  ngOnInit() {
    this.roleService.getAll().subscribe(response => {
      this.roles = JSON.parse(JSON.stringify(response));
    });
  }
  NewUser() {
    this.usuario.roleIds = this.selectedRoles;
    this.usuarioService.post(this.usuario)
      .subscribe();
    this.route.navigate(['republica']);
  }
}

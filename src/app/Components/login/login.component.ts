import { FormsModule } from '@angular/forms';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'republic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: Usuario[];
  usuario: Usuario = {
    login: "",
    email: " ",
    senha: " ",
    id: 0
  };
  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.usuarioService.getUsuarios()
      .subscribe(response =>
        this.usuarios = response.json());
  }

  SalvarEditar() {
    //implementar função de salvar aqui
    alert("os dados foram salvos");
  }
}
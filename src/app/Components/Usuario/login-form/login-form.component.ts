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
  usuarios: Usuario[];
  usuario: Usuario = {

    login: "",
    nome:"",
    email: "",
    senha: "",
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
    console.log(this.usuario.login);
    console.log(this.usuario.email);
    console.log(this.usuario.senha);
    alert("os dados foram salvos");
  }
}
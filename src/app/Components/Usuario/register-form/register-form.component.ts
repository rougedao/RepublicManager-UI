import { Usuario } from '../../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterComponent implements OnInit {
  usuario:Usuario={
    email:"",
    id:0,
    login:"",
    nome:"",
    senha:""
  }
  constructor() { }

  ngOnInit() {
  }
  Login(){
    alert("Você logou!");
  }
  NewUser(){
    alert("aqui você deve ser redirecionado para a pagina de registrar novo usuário");
  }

}

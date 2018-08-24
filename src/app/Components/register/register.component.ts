import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

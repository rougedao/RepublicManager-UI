import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-republica',
  templateUrl: './republica.component.html',
  styleUrls: ['./republica.component.css']
})
export class RepublicaComponent implements OnInit {
  usuarios:any[]; 
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios()
    .subscribe(response =>
      this.usuarios = response.json());
    }

}

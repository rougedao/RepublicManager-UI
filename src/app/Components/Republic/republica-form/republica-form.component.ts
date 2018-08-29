import { UsuarioService } from '../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-republica',
  templateUrl: './republica-form.component.html',
  styleUrls: ['./republica-form.component.css']
})
export class RepublicaComponent implements OnInit {
  usuarios:any[]; 
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.get()
    .subscribe(response =>
      this.usuarios = response.json());
    }

}

import { UsuarioService } from './../../../services/usuario.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dinamic-table',
  templateUrl: './dinamic-table.component.html',
  styleUrls: ['./dinamic-table.component.css']
})
export class DinamicTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'login', 'senha', 'isAtivo'];
  usuarios: any[]

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getAll()
      .subscribe(response =>
        this.usuarios = response.json());
  }
}

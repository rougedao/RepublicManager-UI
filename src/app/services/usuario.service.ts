import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:Http) { }
  getUsuarios(){
    return this.http.get('https://localhost:44327/api/usuario');
  }
}

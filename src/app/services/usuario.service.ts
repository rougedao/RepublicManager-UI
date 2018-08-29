import { Usuario } from './../models/usuario';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:Http) { }
  private url = 'https://localhost:44327/api/usuario';
  get(){
    return this.http.get(this.url);
  }
  post(usuario:Usuario){
    return this.http.post(this.url,usuario);
  }
  

}

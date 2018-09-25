import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {
  constructor(http: Http) {
    const apiUrl = 'https://localhost:44327/api/usuario';
    super(apiUrl, http);
  }
}

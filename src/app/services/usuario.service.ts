import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {
  constructor(http: HttpClient) {
    const apiUrl = 'http://localhost:61209/api/usuario';
    super('http://localhost:61209/api/usuario', http);
  }
}

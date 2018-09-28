import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  constructor(http: Http) {
    const apiUrl = 'http://localhost:61209/api/login';
    super(apiUrl, http);
  }
}

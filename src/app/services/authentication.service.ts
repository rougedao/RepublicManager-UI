import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  constructor(http: HttpClient) {
    const apiUrl = 'http://localhost:61210/api/login';
    super(apiUrl, http);
  }


}

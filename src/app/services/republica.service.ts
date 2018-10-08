import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepublicaService extends BaseService {
  constructor(http: HttpClient) {
    const apiUrl = 'http://localhost:61209/api/republica';
    super(apiUrl, http);
  }
}

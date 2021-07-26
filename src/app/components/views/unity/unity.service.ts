import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unity } from './unity.model';

@Injectable({
  providedIn: 'root'
})
export class UnityService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Unity[]>{
    const url = `${this.baseUrl}/unities`
    return this.http.get<Unity[]>(url)
  }
}

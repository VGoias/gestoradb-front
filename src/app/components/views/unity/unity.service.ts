import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unity } from './unity.model';

@Injectable({
  providedIn: 'root'
})
export class UnityService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar) { }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "X", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 6000
    })
  }

  findById(id: String): Observable<Unity>{
    const url = `${this.baseUrl}/unities/${id}`
    return this.http.get<Unity>(url)
  }

  findAll(): Observable<Unity[]>{
    const url = `${this.baseUrl}unities`
    return this.http.get<Unity[]>(url)
  }

  create(unity: Unity): Observable<Unity>{
    const url = `${this.baseUrl}unities`
    return this.http.post<Unity>(url, unity);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}unities/${id}`
    return this.http.delete<void>(url)
  }

  
}

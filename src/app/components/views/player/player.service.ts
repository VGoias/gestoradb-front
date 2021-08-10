import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from './player.model';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
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

  findById(id: String): Observable<Player>{
    const url = `${this.baseUrl}players/${id}`
    return this.http.get<Player>(url)
  }

  findAllByUnity(id_unity: String): Observable<Player[]>{
    const url = `${this.baseUrl}players?unity=${id_unity}`
    return this.http.get<Player[]>(url)
  }

  create(player: Player, id_unity: String): Observable<Player>{
    const url = `${this.baseUrl}players?unity=${id_unity}`
    return this.http.post<Player>(url, player)
  }

  update(player: Player): Observable<Player>{
    const url = `${this.baseUrl}players/${player.id}`
    return this.http.put<Player>(url, player)
  }
  
  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}players/${id}`
    return this.http.delete<void>(url)
  }

}

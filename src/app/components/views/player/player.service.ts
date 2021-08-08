import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from './player.model';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl: String = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  findAllByUnity(id_unity: String): Observable<Player[]>{
    const url = `${this.baseUrl}/players?unity=${id_unity}`
    return this.http.get<Player[]>(url)
  }
}

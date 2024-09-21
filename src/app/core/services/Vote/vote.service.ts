import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  // Cabecera
  headers = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  // Obtener todos los votos
  getVotes(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/api/votes`);
  }

  // Crear un nuevo voto
  createVote(voteRequest: any, userRequest: any): Observable<any> {
    const payload = {
      voteRequest: voteRequest,
      userRequest: userRequest
    };
    return this._http.post<any>(`${environment.apiUrl}/api/votes`, payload, { headers: this.headers });
  }

  // Actualizar un voto existente
  updateVote(vote: any): Observable<any> {
    return this._http.put<any>(`${environment.apiUrl}/api/votes`, vote, { headers: this.headers });
  }

  // Eliminar un voto por ID
  deleteVote(voteId: number): Observable<any> {
    return this._http.delete<any>(`${environment.apiUrl}/api/votes/${voteId}`, { headers: this.headers });
  }
}

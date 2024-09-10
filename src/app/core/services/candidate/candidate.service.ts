import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = `${environment.apiUrl}/candidates`;

  constructor(private http: HttpClient) {}

  getCandidates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCandidateById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCandidate(candidate: any): Observable<any> {
    return this.http.post(this.apiUrl, candidate);
  }

  updateCandidate(id: string, candidate: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, candidate);
  }

  deleteCandidate(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '@environments/environment';
import { CandidateModule } from 'src/app/features/home_screen/models/CandidateModule';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = `${environment.apiUrl}/api/candidates`;

  constructor(private http: HttpClient) {}

  getCandidates(): Observable<CandidateModule[]> {
    return this.http.get<CandidateModule[]>(environment.apiUrl + '/api/candidates');
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


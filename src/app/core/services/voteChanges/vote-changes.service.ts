import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteChangesService {

  private apiUrl = `${environment.apiUrl}/votesChanges`;

  constructor(private http: HttpClient) {}

  getVoteChanges(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getVoteChangeById(voteChangesId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${voteChangesId}`);
  }

  createVoteChange(voteChange: any): Observable<any> {
    return this.http.post(this.apiUrl, voteChange);
  }

  updateVoteChange(voteChange: any): Observable<any> {
    return this.http.put(this.apiUrl, voteChange);
  }

  deleteVoteChange(voteChangesId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${voteChangesId}`);
  }
}

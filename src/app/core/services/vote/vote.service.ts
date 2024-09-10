import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private apiUrl = `${environment.apiUrl}/votes`;

  constructor(private http: HttpClient) {}

  getVotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getVoteById(voteId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${voteId}`);
  }

  createVote(vote: any): Observable<any> {
    return this.http.post(this.apiUrl, vote);
  }

  updateVote(vote: any): Observable<any> {
    return this.http.put(this.apiUrl, vote);
  }

  deleteVote(voteId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${voteId}`);
  }
}

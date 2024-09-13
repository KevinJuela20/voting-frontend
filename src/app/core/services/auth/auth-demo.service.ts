import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthDemoService {

  private apiUrl = `${environment.apiUrl}/api/v1/demo`;

  constructor(private http: HttpClient) { }

  demoEndpoint(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

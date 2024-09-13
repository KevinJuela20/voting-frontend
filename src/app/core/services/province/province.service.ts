import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';

import { ProvinceModule } from '../../../features/home_screen/models/ProvinceModule';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  // Cabecera
  headers = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  //Get provinces
  async getProvinces(): Promise<ProvinceModule[]> {
    return firstValueFrom(this._http.get<ProvinceModule[]>(environment.apiUrl + '/api/provinces'));
  }
}

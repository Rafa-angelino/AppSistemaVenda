import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  private urlApi: string = environment.endpoint + "DashBoard/";

  constructor(private http: HttpClient) { }

  resumoVendas(): Observable<Response>{
    return this.http.get<Response>(`${this.urlApi}ResumoVendas`);
  }
}

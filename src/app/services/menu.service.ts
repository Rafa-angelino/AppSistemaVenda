import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private urlApi: string = environment.endpoint + "Menu/"

  constructor(private http: HttpClient) { }

  listar(idUsuario: string): Observable<Response>{
    return this.http.get<Response>(`${this.urlApi}ListarMenus?idUsuario=${idUsuario}`);
  }
}

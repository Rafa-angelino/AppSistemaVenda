import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';
import { Login} from '../interfaces/login';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi: string = environment.endpoint + "Usuario/"

  constructor(private http: HttpClient) { }

  iniciarSessao(request: Login): Observable<Response>{
    return this.http.post<Response>(`${this.urlApi}IniciarSessao`, request);
  }

  lista():Observable<Response>{
    return this.http.get<Response>(`${this.urlApi}Listar`);
  }

  registrarUsuario(request: Usuario): Observable<Response>{
    return this.http.post<Response>(`${this.urlApi}RegistrarUsuario`, request);
  }

  editarUsuario(request:Usuario):Observable<Response>{
    return this.http.put<Response>(`${this.urlApi}EditarUsuario`,request);
  }

  deletarUsuario(id: number): Observable<Response>{
    return this.http.delete<Response>(`${this.urlApi}DeletarUsuario/${id}`);
  }

}

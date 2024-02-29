import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';
import { Venda } from '../interfaces/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private urlApi: string = environment.endpoint + "Venda/";

  constructor(private http: HttpClient) { }

  registrarVenda(request : Venda) : Observable<Response>{
    return this.http.post<Response>(`${this.urlApi}RegistrarVenda`, request);
  }

  historicoVenda(buscaPor:string, numeroVenda:string,
    dataInicio: string, dataFim: string) : Observable<Response> {
    return this.http.get<Response>(`${this.urlApi}HistoricoVenda?buscarPor=${buscaPor}&numeroVenda=${numeroVenda}&dataInicio=${dataInicio}&dataFim=${dataFim}`);
  }

  reporteVenda(dataInicio: string, dataFim: string): Observable<Response>{
    return this.http.get<Response>(`${this.urlApi}ReporteVenda?dataInicio=${dataInicio}&dataFim=${dataFim}`);
  }
}

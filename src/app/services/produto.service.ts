import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private urlApi: string = environment.endpoint + "Categoria/";

  constructor(private http: HttpClient) { }

  listarProdutos() : Observable<Response>{
    return this.http.get<Response>(`${this.urlApi}ListarProdutos`);
  }

  registrarProduto(request: Produto): Observable<Response>{
    return this.http.post<Response>(`${this.urlApi}RegistrarProduto`, request);
  }

  editarProduto(request: Produto) : Observable<Response>{
    return this.http.put<Response>(`${this.urlApi}EditarProduto`, request);
  }

  deletarProduto(id: number) : Observable<Response>{
    return this.http.delete<Response>(`${this.urlApi}DeletarProduto/${id}`);
  }
}

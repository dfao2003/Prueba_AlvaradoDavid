import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroment/enviroment';
import { Cliente } from '../domain/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(){
    let url = environment.PATH_WS+"/clientes/list";
    return this.http.get<any>(url);
  }

  saveCliente(cliente: Cliente){
    let url = environment.PATH_WS+'/clientes'
    return this.http.post<any>(url,cliente);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) {}

  getTransacoes() {
    //simulando erro
    // const error = throwError('erro genérico');
    // return timer(3000)
    // .pipe(
    //   mergeMap(()=> error)
    // );
    return this.http.get<Transacao[]>(this.API_URL + '/transacoes');
  }
}

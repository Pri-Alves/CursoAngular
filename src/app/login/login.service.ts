import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: String, password: String) {
    if (email === 'vitorfgsantos@outlook.com' && password ==='123') {
      return of({
        usuário: {
          nome: 'Vitor',
          sobrenome: 'Farias',
          email: 'vitorfgsantos@outlook.com',
        },
        token: 'aDrahabiAdGugiua16287',
      }).pipe(
        delay(2000)
      );
    }
    
    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos'))
    );
  }
}

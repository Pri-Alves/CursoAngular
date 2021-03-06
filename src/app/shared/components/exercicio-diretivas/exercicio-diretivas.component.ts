import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constantes';

  @Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})

export class ExercicioDiretivasComponent {

 deveExibir=true;
 
 PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images'
 MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  

 listaFrutas = [
   'macã',
   'laranja',
   'mamao',
   'melão'
 ]

 carrosLista = [{
   placa: 'jnd-7438',
   cor: 'preto',
 }, {
  placa: 'nnd-7998',
  cor: 'azul',
}, {
  placa: 'zza-7438',
  cor: 'vermelho',
}, {
  placa: 'jld-7411',
  cor: 'branco',
},];
  
 trocarValor() {
   this.deveExibir = !this.deveExibir;
 }

 soma(numero1:number, numero2:number) {
   return numero1 + numero2;
 }

}

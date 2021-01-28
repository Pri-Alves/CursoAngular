import { Component, OnInit } from '@angular/core';

import { Transacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {

  transacoes: Transacao[] = [];

  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;

  constructor(
    private extratoService: ExtratoService
    ) { }

  ngOnInit() { 
    this.carregarExtrato();
   }

  carregarExtrato() {
  this.estaCarregando = true;
  this.erroNoCarregamento = false;
  
  this.extratoService.getTransacoes()
    .subscribe(
      response => {
      this.estaCarregando = false;
      this.transacoes = response;
    }, error => {
      this.estaCarregando = false;
      this.erroNoCarregamento = true;
      //fazer alguma coisa se der erro
    });
}

}

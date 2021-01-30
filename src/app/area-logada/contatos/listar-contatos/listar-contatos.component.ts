import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Contato[] = [];
  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;

  constructor(
    private contatosService: ContatosService,
    private router: Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.CarregarContatos();
  }

  CarregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    this.contatosService.getContatos()
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    )
  }

  onSuccess(response: Contato[]){
    this.contatos = response;
  }

  onError(error:any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  irParaDetalhes(idContato: string){
    this.router.navigate([`contatos/${idContato}`])
  }

  deletarContato(idContato: string){
    this.contatosService.deleteContato(idContato)
    .subscribe(
      _response => this.onSuccessDeletarContato(idContato),
      _error => this.onErrorDeletarContato(),
    );
  }

  onSuccessDeletarContato(idContato: string){
    this.toastr.success('Sucesso!', 'Contato Deletado');
    this.contatos = this.contatos.filter(contatos => contatos.id !== idContato);
  }

  onErrorDeletarContato(){
    console.log('erro o deletar')
  }
}

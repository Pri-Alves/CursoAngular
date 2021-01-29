import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {
  
  contato!: Contato;
  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contatosService: ContatosService
  ) { }

  ngOnInit() {
    const idContato = this.route.snapshot.paramMap.get("id");
    this.carregarContato(idContato);
  }

  carregarContato(idContato: any) {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    
    this.contatosService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        //error => this.onError(error)
      );
  }

  onSuccess(response: Contato){
    this.contato = response;
    console.log(this.contato);
  }
  
  onError(error:any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  voltar(){
    this.router.navigate([`contatos`]);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  palavra = 'palavra';
  corfavorita = 'verde';
  titulo = 'Seja bem vindo!';

  constructor(){  }

  eventoRecebido($event:any){
    console.log('appComponente: evento recebido!', $event);
  }
  

}

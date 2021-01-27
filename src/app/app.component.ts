import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  showHeader = true;
  palavra = 'palavra';
  corfavorita = 'verde';
  titulo = 'Seja bem vindo!';

  constructor(){  }
  
  ngOnInit() {
    setTimeout(() => {
      this.titulo = 'outra coisa';
    
      setTimeout(() => {
        this.showHeader = false;
      }, 3000)
    
    }, 3000)
  }
  
  eventoRecebido($event:any){
    console.log('appComponente: evento recebido!', $event);
  }

}

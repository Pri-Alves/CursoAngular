import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
  providers: [
    DecimalPipe,
  ],
})
export class ExercicioPipesComponent {

  constructor(
    private DecimalPipe:DecimalPipe
    ) {}

  filme = {
    titulo: 'harry Potter - A pedra Filosofal',
    estrelas: 4.45565667,
    precoAluguel: 15.45,
    dataLancamento: new Date (2019, 5, 30),
  }

  compras = [{
    produto: 'lapadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020,1,1,15,20),
}, {
    produto: 'farinha',
    valor: 450.29,
    quantidade: 29.33333,
    peso: 2,
    data: new Date(2020,1,10,19,30),
}];

getPesoFormatado(peso: number) {
  if (peso <= 0) {
    return 'sem peso';
  }
  return this.DecimalPipe.transform(peso, '1.1-2') + 'Kg';
}

}

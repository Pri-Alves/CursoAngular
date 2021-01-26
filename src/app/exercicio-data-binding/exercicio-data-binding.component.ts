import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {
  
  imageUrl = "https://image.winudf.com/v2/image1/Y29tLnRhbWFyYWFwcHMuY3V0ZWxpdHRsZWtpdHRlbnNfc2NyZWVuXzRfMTU1ODgxNDI0Nl8wNDc/screen-4.jpg?fakeurl=1&type=.jpg";
  initialValue = 'valor inicial'
  isDisabled = true;
  accessibiityText = 'Botão Habilitado';

  @Input() palavra: string;
  @Input() color: string;
  constructor() {    
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
    this.palavra = '';
    this.color= '';
   }

  ngOnInit(): void {
  }


}

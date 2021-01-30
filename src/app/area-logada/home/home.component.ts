import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: any;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }

  abrirModal(content: any){
    this.modalService.open(content).result.then((result) => {
      console.log('Modal Closed');
    }, (reason) => {
      console.log('Modal dismissed');
    });
  }

}

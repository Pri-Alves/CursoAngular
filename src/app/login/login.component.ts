import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
  ){ }

  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  email!: string;
  password!: string;
  estaCarregando: boolean = false;
  erroNoLogin: boolean = false;

  onSubmit(form: any) {
    this.erroNoLogin = false;
    
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.password.invalid){
        this.passwordInput.nativeElement.focus();
        return;
      }
      return;
    }
    this.login();
    //console.log('email', this.email);
    //console.log('password:', this.password);
  }

  login() {
    this.estaCarregando = true;
    this.loginService.logar(this.email, this.password)
    .pipe(finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      _response => {
        console.log('Sucesso! Logou');
      },
      _error => {
        this.erroNoLogin = true;
        console.log('Deu Erro! Não logou!');
      }
    );
  }

  exibeErro(nomeControle: string, form: NgForm){
    if (!form.controls[nomeControle]) {
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched
  }

}

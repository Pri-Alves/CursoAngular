import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit,  AfterViewInit, OnDestroy {
  @Input() titulo: string

  constructor() { 
    console.log('Construtor');
    this.titulo='';
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}

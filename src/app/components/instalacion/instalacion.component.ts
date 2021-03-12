import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instalacion',
  templateUrl: './instalacion.component.html',
  styles: [
  ]
})
export class InstalacionComponent implements OnInit {
  titulo: string;
  nodeUrl: string = 'https://nodejs.org/download/release/v10.8.0/';
  tsUrl: string = 'https://www.typescriptlang.org/#installation'
  angularUrl: string = 'https://cli.angular.io/'



  constructor() {
    this.titulo = "Manual de instalación de Angular"
   }

  ngOnInit(): void {
  }

}

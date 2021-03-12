import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instalacion',
  templateUrl: './instalacion.component.html',
  styles: [
  ]
})
export class InstalacionComponent implements OnInit {
  titulo: string;

  constructor() {
    this.titulo = "Manual de instalación de Angular"
   }

  ngOnInit(): void {
  }

}

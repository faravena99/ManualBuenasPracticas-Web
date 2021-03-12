import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buenas-practicas',
  templateUrl: './buenas-practicas.component.html',
  styles: [
  ]
})
export class BuenasPracticasComponent implements OnInit {
  titulo:string;
  constructor() { 
    this.titulo = " Buenas Prácticas";
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  titulo: string;
  constructor() {
    this.titulo = "Bienvenido al manual de buenas prácticas";
   }

  ngOnInit(): void {
  }

}

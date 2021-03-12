import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-proyect',
  templateUrl: './pipe-proyect.component.html',
  styles: [
  ]
})
export class PipeProyectComponent implements OnInit {

  urlPipe = 'https://faravena99.github.io/Pipes-web/';
  titulo: string;
  constructor() {
    this.titulo = 'Angular Pipes'
   }

  ngOnInit(): void {
  }

}

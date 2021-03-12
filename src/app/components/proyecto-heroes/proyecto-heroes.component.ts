import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-heroes',
  templateUrl: './proyecto-heroes.component.html',
  styles: [
  ]
})
export class ProyectoHeroesComponent implements OnInit {

  proyectoHeroesUrl = 'https://faravena99.github.io/SPA-Web/#/home';
  repositorioProyecto = 'https://github.com/faravena99/SPA-Web';

  titulo:string;
  constructor() { 
    this.titulo = 'Bienvenido a la SPA-HeroApp'
  }

  ngOnInit(): void {
  }

}

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

  nombre:string = 'Capitan America';
  nombre2: string = 'FeLiPe AraVeNa PoNcE';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[]= ['Thor', 'Capitan America', 'SpiderMan', 'Hulk', 'DeadPool'];
  PI: number = Math.PI;
  porcentaje: number = 0.23456;
  salario:number = 12345;
  fecha: Date = new Date();
  activar:boolean= true;

  idioma: string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/jEB8M9K-FhE';

  valorPromesa = new Promise<string>((resolve) =>{
    setTimeout(() =>{
      resolve('Llego la data');
    }, 4500);
  })

  heroe = {
    nombre:'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }


  ngOnInit(): void {
  }

}

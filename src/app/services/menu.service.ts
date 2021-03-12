import { Injectable } from '@angular/core';
import { Menu } from 'src/app/components/interface/menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: Menu[] = [
    {
      descripcion: "Guía de instalación del Framework",
      img: "assets/img/instalacion.png",
      ruta: ['/instalacion']
    },
    {
      descripcion: "Aquí veremos las buenas prácticas",
      img:"assets/img/buenasPracticas.png",
      ruta: ['/buenasPracticas']
    },
    {
      descripcion: "Proyecto de ejemplo para consumir data desde un servicio",
      img:"assets/img/heroes.png",
      ruta: ['/heroes']
    },
    {
      descripcion: "Demostración de los angular-pipes con sus inputs y outputs",
      img:"assets/img/pipes.png",
      ruta: ['/pipes']
    }
  ];

  constructor() { console.log("servicio listo")}

  getMenu(){
    return this.menu;
  }
}

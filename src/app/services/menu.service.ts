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
    }
  ];

  constructor() { console.log("servicio listo")}

  getMenu(){
    return this.menu;
  }
}

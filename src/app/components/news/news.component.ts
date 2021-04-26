import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  titulo = "Nuevos alineamientos";

  subTitulo1 = "Servicios";
  subTitulo2 = "Proyectos";
  subTitulo3 = "Ramas";

  descripcion1 = "Descripcion";

  descripcion2 = "Descripcion";

  descripcion3 = "Descripcion";

  constructor() { }

  ngOnInit(): void {
  }

}

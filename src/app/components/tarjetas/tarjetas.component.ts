import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/components/interface/menu/menu.component';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent  {

menu: Menu[] = [];
 
  constructor(private menuService: MenuService) { 

    this.menu = this.menuService.getMenu();
    console.log(this.menu);
   
  }



}

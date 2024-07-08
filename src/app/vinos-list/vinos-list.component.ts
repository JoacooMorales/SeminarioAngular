import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { vino } from './vino';

@Component({
  selector: 'app-vinos-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './vinos-list.component.html',
  styleUrls: ['./vinos-list.component.scss']
})
export class VinosListComponent {

  vinos: vino[] = [
    {
      name: "Ruca Malen Capítulo 2 Malbec",
      type: "Tinto",
      price: 1000,
      stock: 5,
      image: "assets/imagenes/ruca.jpeg",
      clearance: false,
      quantity:0,
    },
    {
      name: "La Celia Heritage Single Vineyard",
      type: "Tinto",
      price: 2000,
      stock: 4,
      image: "assets/imagenes/celia.jpeg",
      clearance: true,
      quantity:0,
    },
    {
      name: "Rutini",
      type: "Tinto",
      price: 10000,
      stock: 0,
      image: "assets/imagenes/rutini.jpeg",
      clearance: false,
      quantity:0,
    }
  ];

  upQuantity(vino:vino) : void {
    if (vino.quantity < vino.stock)
    vino.quantity++;
  }
  downQuantity (vino:vino) : void {
    if (vino.quantity>0)
    vino.quantity--;
  }

  onChangeQuantity (event: any ,vino :vino)  : void{
    console.log(event.key);
  }
  

}

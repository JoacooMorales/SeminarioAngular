import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { vino } from './vino';
import { InputIntegerComponent } from "../input-integer/input-integer.component";
import { VinoCarroService } from '../vino-carro.service';

@Component({
    selector: 'app-vinos-list',
    standalone: true,
    templateUrl: './vinos-list.component.html',
    styleUrls: ['./vinos-list.component.scss'],
    imports: [CommonModule, FormsModule, InputIntegerComponent]
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

  constructor (private carro:VinoCarroService){
    
  }


  addToCart(vino: vino) : void {
    this.carro.addToCart(vino);
    vino.stock -= vino.quantity;
    vino.quantity =0;
  }

  maxReached (m:string){
    alert(m)
  }

 
  

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vino } from './vino';

@Component({
  selector: 'app-vinos-list',
  standalone: true,
  imports: [CommonModule],
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
      image: "assets/img/ruca.jpeg",
      clearance: false,
    },
    {
      name: "La Celia Heritage Single Vineyard",
      type: "Tinto",
      price: 2000,
      stock: 4,
      image: "assets/celia.jpg",
      clearance: true,
    },
    {
      name: "Routini",
      type: "Tinto",
      price: 10000,
      stock: 0,
      image: "assets/img/ruca.jpeg",
      clearance: false,
    }
  ];
}

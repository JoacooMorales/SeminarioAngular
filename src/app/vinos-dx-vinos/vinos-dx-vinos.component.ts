import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinosListComponent } from "../vinos-list/vinos-list.component";
import { CarroComprasComponent } from "../carro-compras/carro-compras.component";

@Component({
    selector: 'app-vinos-dx-vinos',
    standalone: true,
    templateUrl: './vinos-dx-vinos.component.html',
    styleUrl: './vinos-dx-vinos.component.scss',
    imports: [CommonModule,VinosListComponent, CarroComprasComponent]
})
export class VinosDxVinosComponent {

}

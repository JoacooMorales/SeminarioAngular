import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VinosListComponent } from './vinos-list/vinos-list.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { VinosDxVinosComponent } from "./vinos-dx-vinos/vinos-dx-vinos.component";
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule,RouterOutlet, VinosListComponent, CarroComprasComponent, VinosDxVinosComponent]
})
export class AppComponent {
  title = 'VinosDx';
}


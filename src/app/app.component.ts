import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { VinosListComponent } from './vinos-list/vinos-list.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { VinosDxVinosComponent } from "./vinos-dx-vinos/vinos-dx-vinos.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,RouterModule, VinosListComponent, CarroComprasComponent, VinosDxVinosComponent]
})
export class AppComponent {
  title = 'VinosDx';
}


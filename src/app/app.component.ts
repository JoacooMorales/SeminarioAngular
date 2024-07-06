import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VinosListComponent } from './vinos-list/vinos-list.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VinosListComponent,CarroComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VinosDx';
}

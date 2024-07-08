import { Routes } from '@angular/router';
import { VinosDxVinosComponent } from './vinos-dx-vinos/vinos-dx-vinos.component';
import { VinosDxAboutComponent } from './vinos-dx-about/vinos-dx-about.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'vinos',
        pathMatch: 'full'
    },
    {
        path: 'vinos',
        component: VinosDxVinosComponent
    },
    {
        path: 'about',
        component: VinosDxAboutComponent
    },


];

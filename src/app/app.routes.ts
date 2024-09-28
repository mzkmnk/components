import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'showComponents',
        loadComponent:() => import('./pages/show-components/show-components.component').then((M) => M.ShowComponentsComponent)
    },
    {
        path:'**',
        redirectTo:'showComponents'
    }
];

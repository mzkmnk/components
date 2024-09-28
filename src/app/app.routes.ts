import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'showComponents',
        loadComponent:() => import('./pages/show-components/show-components.component').then((M) => M.ShowComponentsComponent)
    },
    {
        path:'messagePage',
        loadComponent:() => import('./pages/message/message.component').then((M) => M.MessageComponent),
    },
    {
        path:'**',
        redirectTo:'showComponents'
    }
];

import { Routes } from '@angular/router';


export const routes: Routes = [
{ path: '', loadComponent: () => import('./pages/ticket-list/ticket-list.component').then(m => m.TicketListComponent) },
{ path: 'create', loadComponent: () => import('./pages/ticket-create/ticket-create.component').then(m => m.TicketCreateComponent) },
{ path: '**', redirectTo: '', }
];

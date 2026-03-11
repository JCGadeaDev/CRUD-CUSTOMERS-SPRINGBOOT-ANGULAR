import { Routes } from '@angular/router';
import { CustomersAdd } from './components/customers-add/customers-add';
import { CustomersList } from './components/customers-list/customers-list';

 export const routes: Routes = [
  { path: '', component: CustomersAdd },
  { path: 'lista', component: CustomersList },
  { path: 'edit/:id', component: CustomersAdd } // Reutilizamos el formulario para editar
];


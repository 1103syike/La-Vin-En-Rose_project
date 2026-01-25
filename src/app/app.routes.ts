import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.component';
import { FreshFlowerPage } from './pages/fresh-flower/fresh-flower';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'Products', component: ProductsPage },
  { path: 'FreshFlower', component: FreshFlowerPage },
  
  { path: '**', redirectTo: '' },
];

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gastos',
    loadChildren: () => import('./gastos/gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'romance',
    loadChildren: () => import('./romance/romance/romance.module').then( m => m.RomancePageModule)
  },
  {
    path: 'blank',
    loadChildren: () => import('./formcadastro/blank/blank.module').then( m => m.BlankPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

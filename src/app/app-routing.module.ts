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
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'terror',
    loadChildren: () => import('./Terror/terror/terror.module').then( m => m.TerrorPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users/users.module').then( m => m.UsersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

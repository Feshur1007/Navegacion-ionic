import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/pagina1',
    pathMatch: 'full'
  },
  {
    path: 'pages/pagina1',
    loadChildren: () => import('./pages/pagina1/pagina1.module').then(m => m.Pagina1PageModule)
  },
  {
    path: 'pages/pagina2',
    loadChildren: () => import('./pages/pagina2/pagina2.module').then(m => m.Pagina2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
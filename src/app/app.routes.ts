import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'pagina1',
    loadComponent: () => import('./pages/pagina1/pagina1.page').then( m => m.Pagina1Page)
  },
  {
    path: 'pagina2',
    loadComponent: () => import('./pages/pagina2/pagina2.page').then( m => m.Pagina2Page)
  },
];

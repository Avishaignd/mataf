import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'data',
    loadComponent: () => import('./pages/data-page/data-page.component').then((m) => m.DataPageComponent)
  },
  {
    path: 'monitor',
    loadComponent: () => import('./pages/monitor-page/monitor-page.component').then((m) => m.MonitorPageComponent)
  },
  {
    path: 'analysis',
    loadComponent: () => import('./pages/analysis-page/analysis-page.component').then((m) => m.AnalysisPageComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

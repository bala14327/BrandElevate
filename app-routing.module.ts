const routes: Routes = [
  { path: 'history', loadChildren: () => import('./features/history/history.module').then(m => m.HistoryModule) },
  // Add other routes...
];

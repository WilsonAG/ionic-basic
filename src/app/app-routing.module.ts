import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'alerts',
    loadChildren: () =>
      import('./pages/alerts/alerts.module').then((m) => m.AlertsPageModule),
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./pages/action-sheet/action-sheet.module').then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./pages/cards/cards.module').then((m) => m.CardsPageModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./pages/clients/clients.module').then((m) => m.ClientsPageModule),
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./pages/resources/resources.module').then(
        (m) => m.ResourcesPageModule
      ),
  },
  {
    path: 'api',
    loadChildren: () =>
      import('./pages/api/api.module').then((m) => m.ApiPageModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

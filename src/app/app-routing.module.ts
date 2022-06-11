import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, LoginGuard } from './core/guards';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: () =>
      import('./modules/panel/panel.module').then((m) => m.PanelModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'panel',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLandingComponent } from './auth-landing.component';
import { LoginComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AuthLandingComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLandingComponent } from './panel-landing.component';

const routes: Routes = [
  {
    path: '',
    component: PanelLandingComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./pages/posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('./pages/comments/comments.module').then(
            (m) => m.CommentsModule
          ),
      },
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent, PostControlComponent } from './components';
import { PostsLandingComponent } from './posts-landing.component';

const routes: Routes = [
  {
    path: '',
    component: PostsLandingComponent,
    children: [
      {
        path: 'all',
        component: AllPostsComponent,
      },
      {
        path: 'control',
        component: PostControlComponent,
      },
      {
        path: 'control/:id',
        component: PostControlComponent,
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}

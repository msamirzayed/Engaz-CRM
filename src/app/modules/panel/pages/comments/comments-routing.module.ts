import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsLandingComponent } from './comments-landing.component';
import { AllCommentsComponent, CommentsControlComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: CommentsLandingComponent,
    children: [
      {
        path: 'all',
        component: AllCommentsComponent,
      },
      {
        path: 'control',
        component: CommentsControlComponent,
      },
      {
        path: 'control/:id',
        component: CommentsControlComponent,
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
export class CommentsRoutingModule {}

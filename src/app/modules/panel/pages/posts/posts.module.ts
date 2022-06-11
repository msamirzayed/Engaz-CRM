import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsLandingComponent } from './posts-landing.component';
import { AllPostsComponent, PostControlComponent } from './components';

const COMPONENTS = [
  PostsLandingComponent,
  AllPostsComponent,
  PostControlComponent,
];

const MODULES = [
  CommonModule,
  PostsRoutingModule,
  PostsRoutingModule,
  NgxDatatableModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class PostsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsLandingComponent } from './comments-landing.component';
import { AllCommentsComponent, CommentsControlComponent } from './components';

const COMPONENTS = [
  CommentsLandingComponent,
  AllCommentsComponent,
  CommentsControlComponent,
];

const MODULES = [
  CommonModule,
  CommentsRoutingModule,
  CommentsRoutingModule,
  NgxDatatableModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class CommentsModule {}

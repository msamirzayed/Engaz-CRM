import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLandingComponent } from './auth-landing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthLandingComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}

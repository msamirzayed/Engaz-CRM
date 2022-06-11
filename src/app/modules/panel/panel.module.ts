import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelLandingComponent } from './panel-landing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PanelLandingComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    PanelRoutingModule,
    ReactiveFormsModule,
  ],
})
export class PanelModule {}
